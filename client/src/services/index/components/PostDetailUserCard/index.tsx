import * as React from 'react';
import styled from '~/styled';

import CircleImageView from '../CircleImageView';

import Pin from '../../assets/img/pin-fill.png?url';
import Profile from '../../assets/img/Profile.jpg?url';

export interface IPostDetailUserCardProps {
}

export default class PostDetailUserCard extends React.Component<IPostDetailUserCardProps> {
  public render() {
    return (
      <Wrapper>
        <GridImgWrapper>
          <CircleImageView src={Profile} size={2.4} />
        </GridImgWrapper>
        <GridTopLineWrapper>
          <UserNameTextLine>박지홍</UserNameTextLine>
          <UserLevelTextLine>lv.1</UserLevelTextLine>
        </GridTopLineWrapper>
        <GridBottomLineWrapper>
          <LocationIcon src={Pin} />
          <UserLocationTextLine>경기도 화성시 봉담읍 와우리</UserLocationTextLine>
        </GridBottomLineWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3rem auto;
    grid-template-rows: 1.8rem auto;
    grid-template-areas:
    "img top"
		"img bottom";
    column-gap: 0.8rem;
    width: 100%;
    height: 4rem;
    border-bottom: solid 1px #ccc;
    padding: 0.5rem;
`

const GridImgWrapper = styled.div`
    grid-area: img;
`

const GridTopLineWrapper = styled.div`
    grid-area: top;
    align-self: end;
`

const GridBottomLineWrapper = styled.div`
    grid-area: bottom;
`

const UserNameTextLine = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #5d5d5d;
`

const UserLevelTextLine = styled.span`
    font-size: 0.5rem;
    font-weight: bold;
    color: #a4a2a2;
    padding: 0 0.3rem;
`

const LocationIcon = styled.img`
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 0.2rem 0 0;
`

const UserLocationTextLine = styled.text`
    font-size: 0.7rem;
    color: #a4a2a2;
`