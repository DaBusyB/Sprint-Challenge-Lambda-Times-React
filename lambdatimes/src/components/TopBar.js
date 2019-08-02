import React from 'react';
import styled from 'styled-components'

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
}
@media (min-width: 1280px) {
  
  width: 1280px;

}
`;

const ContainerLDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;



const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLDiv>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLDiv>
        <ContainerCDiv>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCDiv>
        <ContainerRDiv>
          <span>LOG IN</span>
        </ContainerRDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;