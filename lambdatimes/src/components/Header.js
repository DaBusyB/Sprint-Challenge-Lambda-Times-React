import React from 'react';
import styled from 'styled-components'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const DateDiv = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const TempDiv = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <DateDiv>SMARCH 32, 2018</DateDiv>
      <h1>Lambda Times</h1>
      <TempDiv>98°</TempDiv>
    </HeaderDiv>
  )
}

export default Header