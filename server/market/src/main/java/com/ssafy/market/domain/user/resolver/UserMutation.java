package com.ssafy.market.domain.user.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.ssafy.market.domain.user.domain.User;
import com.ssafy.market.domain.user.dto.LoginUserOutput;
import com.ssafy.market.domain.user.dto.LoginUserInput;
import com.ssafy.market.domain.user.dto.UpdateUserInput;
import com.ssafy.market.domain.user.dto.UserOutput;
import com.ssafy.market.domain.user.repository.UserRepository;
import com.ssafy.market.domain.user.security.TokenProvider;
import com.ssafy.market.global.apis.KakaoApi;
import graphql.schema.DataFetchingEnvironment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;

@Component
@RequiredArgsConstructor
public class UserMutation implements GraphQLMutationResolver {

    private final UserRepository userRepository;
    private final KakaoApi kakaoApi;
    private final TokenProvider tokenProvider;

    @Transactional
    public LoginUserOutput loginUser(LoginUserInput input,DataFetchingEnvironment env){
        String Provider = input.getProvider();
        String Token = input.getToken();
        String Jwt = "ERROR";
        if(StringUtils.hasText(Provider) && Provider.equals("Kakao")){
            System.out.println("kakao");
            User user = kakaoApi.getUserInfo(Token);

            User selected = userRepository.findByProviderId(user.getProviderId());
            if(selected == null){
                userRepository.save(user);
            }
            user = userRepository.findByProviderId(user.getProviderId());
            Jwt = tokenProvider.createJwtToken(user);
        }

        LoginUserOutput output = new LoginUserOutput(Jwt);
        return output;
    }
    @Transactional
    public UserOutput updateUser(UpdateUserInput input){
        User user = userRepository.findById(input.getUserId()).get();
        user.update(input.getImageUrl(),input.getPhone(),input.getAddress(),input.getTrust());
        UserOutput output =  new UserOutput(input.getUserId(),user.getName(),user.getEmail(),user.getImageUrl(),user.getProvider(),user.getProviderId(),user.getPhone(),user.getAddress(),user.getTrust());
        return output;
    }
    @Transactional
    public int deleteUser(Long id){
        return userRepository.deleteByUserId(id);
    }
}

