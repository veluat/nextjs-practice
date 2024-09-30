import styled from 'styled-components'
import {LinkBlock} from './LinkBlock/LinkBlock'
import Link from 'next/link'
import {Button} from '../Button/Button'
import Image from 'next/image'

type HeaderProps = {
  showLogo?: boolean;
};

export const Header = ({showLogo}: HeaderProps) => {

  return (
    <Navbar>
      {!showLogo ? (
        <Link href='/' passHref>
          <StyledHomeButton as={Button}>HOME</StyledHomeButton>
        </Link>
      ) : (
        <Image src='/logo.png' alt='Rick and Morty Logo' width={178} height={55} priority/>
      )}
      <LinkContainer>
        <LinkBlock title='Characters'/>
        <LinkBlock title='Locations'/>
        <LinkBlock title='Episodes'/>
      </LinkContainer>
    </Navbar>
  )
}

const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 700px) {
        text-align: center;
    }
`

const StyledHomeButton = styled(Button)`
    width: 150px;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`