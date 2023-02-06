import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #caebf2;
  margin-bottom: 48px;
  padding: 16px 0;
`;
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;
const HeaderTitle = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const Header = () => (
  // <div className="header">
  //   <div className="container">
  //     <h1 className="header__title">Sip Calculator</h1>
  //   </div>
  // </div>
  <HeaderWrapper>
    <Container>
      <HeaderTitle>Sip Calculator</HeaderTitle>
    </Container>
  </HeaderWrapper>
);

export default Header;
