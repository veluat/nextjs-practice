import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {Header} from '../../Header/Header'
import {NextPage} from 'next'

export const MainLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header showLogo />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Main = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
`;