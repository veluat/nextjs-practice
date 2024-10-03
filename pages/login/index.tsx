import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'
import {useAuth} from 'assets/context/AuthContext'
import styled from 'styled-components'

const Login = () => {
  const {isAuth, toggleAuth} = useAuth()

  return (
    <PageWrapper>
      <ToggleWrapper>
        <span>Toggle Login / Logout for Testing</span>
        <StyledToggle>
          <SwitchButton isAuth={isAuth} onClick={toggleAuth}/>
          <h2>{isAuth ? 'You are login' : 'You are logout'}</h2>
        </StyledToggle>
      </ToggleWrapper>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login


const ToggleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-weight: 600;
    font-size: 36px;
    color: #fa52d3;
`
const StyledToggle = styled.div`
    border-radius: 12px;
    box-shadow: 0 2px 3px 1px #fa52d3;
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-weight: 600;
    font-size: 20px;
`

const SwitchButton = styled.button<{ isAuth: boolean }>`
    display: inline-block;
    width: 72px;
    height: 38px;
    border-radius: 19px;
    background: ${({isAuth}) => (isAuth ? '#fa52d3' : '#facaff')};
    z-index: 0;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    position: relative;
    transition-duration: 300ms;

    &::after {
        content: "";
        height: 32px;
        width: 32px;
        border-radius: 17px;
        background: #fff;
        top: 3px;
        left: 3px;
        transition-duration: 300ms;
        position: absolute;
        z-index: 1;
        transform: ${({isAuth}) => (isAuth ? 'translateX(32px)' : 'none')};
    }
`