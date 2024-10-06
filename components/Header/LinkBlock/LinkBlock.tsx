import Link from 'next/link'
import styled from 'styled-components'
import {useRouter} from 'next/router'

type PropsType = {
  title: string;
};

export const LinkBlock = (props: PropsType) => {
  const {title} = props
  const router = useRouter()

  const isActive = router.pathname === `/${title.toLowerCase()}`

  return (
    <LinkWrapper>
      <StyledLink href={`/${title.toLowerCase()}`} passHref className={isActive ? 'active' : ''}>
        {title} →
      </StyledLink>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.div`
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(131, 134, 135, 0);

    @media (max-width: 700px) {
        padding: 4px;
    }
`

const StyledLink = styled(Link)<{ active?: boolean }>`
    position: relative;
    text-decoration: none;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 0.7rem;
    transition: color 0.3s;
    color: #551a8b;

    &:active {
        color: #fa52d3;
    }

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -5px;
        height: 3px;
        width: 0;
        border-radius: 4px;
        background-color: #551a8b;
        transform: translateX(-50%);
        transition: width 0.3s ease;
    }

    &:hover::after,
    &:focus::after,
    &:active::after {
        width: 100%;
        background-color: #fa52d3;
    }

    &:hover, &:focus, &:active {
        color: #fa52d3;
    }

    @media (max-width: 700px) {
        font-size: 24px;
    }
`