import * as React from 'react';
import styled from '~/styled';
import Pin from '../../assets/img/pin-fill.png?url';
import CircleImageView from '../CircleImageView';

export default () => {
  return (
    <Wrapper>
      <WrapperFlex>
        <CircleImageView
          size={4}
          src={
            'https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png'
          }
          radius={35}
        />
        <WrapperUserInfo>
            <TextUserInfo>
                박지홍
            </TextUserInfo>
            <TextuserAddr>
              <SmallIcon src={Pin} />
                경기도 화성시 봉담읍
            </TextuserAddr>
        </WrapperUserInfo>
      </WrapperFlex>
      <WrapperMainButton>
            <MainButton>
                <div>진행중인 매칭</div> <InnerLine>3</InnerLine>
            </MainButton>
            <MainButton>
            <div>판매글 목록</div> <InnerLine>0</InnerLine>
            </MainButton>
        </WrapperMainButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  height: 242px;
  width: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.mainUserCardBGColor};
  padding: 20px;
  box-shadow: 0 2px 11px 0 rgba(191, 191, 191, 0.5);
`;

const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const WrapperUserInfo = styled.div`
    margin: 15px;
    flex-grow: 8;
`;

const TextUserInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const TextuserAddr = styled.div`
    display: flex;
    align-items: center;
    color: #397daa;
    font-weight: 500;
    font-size: 12px;
`;

const WrapperMainButton = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`;

const MainButton = styled.div`
    display: flex;
    padding: 15px;
    width:100%;
    font-weight: 500;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-family: GmarketSansTTF;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right, #259be5, #6459db);
      margin-bottom: 17px;
      width: 45%;
      height: 48px;
      border-radius: 7px;
      background-color: #ffffff;
      font-size: 16px;
      &>*{
        font-family: GmarketSansTTF;
      }
`;

const InnerLine = styled.div`
  display: inline;
  font-family: GmarketSansTTF;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f36f5f;
`;

const SmallIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0;
`;
