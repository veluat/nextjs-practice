import Image, {StaticImageData} from 'next/image'
import {CharacterStatusType} from 'assets/api/rick-and-morty-api'
import styled from 'styled-components'

type StatusProps = {
  status: CharacterStatusType
  src: StaticImageData
}

export const Status = (props: StatusProps) => {
  const {src, status} = props
  return (
    <StatusLine>
      <Image src={src} alt={status} width={20} height={20}/>
      <Title>Status: {status}</Title>
    </StatusLine>
  )
}

const StatusLine = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Title = styled.span`
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #551a8b;
`