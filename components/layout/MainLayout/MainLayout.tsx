import React from 'react'
import styled from 'styled-components'
import {Header} from '../../Header/Header'

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <Container>
      <Header showLogo/>
      <Main>{children}</Main>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`

const Main = styled.div`
    width: 100%;
    padding-bottom: 10px;
    overflow: hidden;
`