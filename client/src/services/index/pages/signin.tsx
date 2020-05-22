import axios from 'axios';
import * as React from 'react';
import KakaoLogin from 'react-kakao-login';
import { useGetHello2Query } from '~/generated/graphql'
import styled from '~/styled';
import GoogleIcon from '../assets/img/signin-google.png?url';
import KakaoIcon from '../assets/img/signin-kakao.png?url';
import CircleImageView from '../components/CircleImageView';
import { NEXT_APP_GRAPHQL_ENDPOINT, NEXT_APP_KAKAO_CLIENT_KEY } from '../helpers/config';
import useStores from '../helpers/useStores';

interface ISignInProps {}

export default (props: ISignInProps) => {
  const store = useStores();
  const {data, loading, error} = useGetHello2Query();
  console.log(NEXT_APP_KAKAO_CLIENT_KEY);

  const success = (res: any) => {
    store.authStore.getTest();
    console.log('kakao login 성공');
  };
  const failure = () => {
    alert('실패');
  };

  const getNaverAuth = () => {};
  return (
    <Wrapper>
      <WrapperLine>
        <Line>소개 Thing</Line>
      </WrapperLine>
      <StyledKakaoLogin
        jsKey={NEXT_APP_KAKAO_CLIENT_KEY!}
        onSuccess={success}
        onFailure={failure}
      >
        <LoginText>카카오로 시작하기</LoginText>
      </StyledKakaoLogin>
      <LoginButton type={'google'}>
        <LoginText>구글계정으로 시작하기</LoginText>
      </LoginButton>
      <LoginButton type={'naver'}>
        <LoginText>네이버로 시작하기</LoginText>
      </LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const WrapperLine = styled.div`
  text-align: center;
  margin-top: 40%;
  margin-bottom: 30%;
`;

const WrapperLoginImageText = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
`;

const Line = styled.p`
  margin: 22px 0.5rem 0rem 0;
  font-size: 36px;
  font-weight: bold;
  font-family: "Jua";
  color: ${(props) => props.theme.pointFontColor};
`;

const LoginText = styled.div`
  font-family: "Noto sans";
  font-weight: bold;
  margin: auto;
  text-align: center;
  font-size: 16px;
`;

const StyledKakaoLogin = styled(KakaoLogin)`
  display: flex;
  height: 49px;
  width: 100%;
  margin-top: 13px;
  background-color: ${(props) => props.theme.button.login.kakao.bg};
  border-radius: 25px;
  border: 0ch;
`;

const LoginButton = styled.div<{ type: 'google' | 'naver' }>`
  height: 49px;
  width: 100%;
  display: flex;
  border-radius: 25px;
  background-color: ${(props) => props.theme.button.login[props.type].bg};
  border: ${(props) =>
    props.theme.button.login[props.type].border !== 'none'
      ? '1px solid ' + props.theme.button.login[props.type].border
      : 'none'};
  margin-top: 13px;
  margin-bottom: 13px;
`;