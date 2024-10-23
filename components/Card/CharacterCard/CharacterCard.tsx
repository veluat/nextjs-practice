import {Card} from '../Card'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import aliveStatus from 'public/statuses/alive.png'
import deadStatus from 'public/statuses/dead.png'
import unknownStatus from 'public/statuses/unknown.png'
import {CharacterType} from 'assets/api/rick-and-morty-api'
import {Status} from './Status/Status'

const statusImages = {
  Alive: aliveStatus,
  Dead: deadStatus,
  unknown: unknownStatus,
}

type PropsType = {
  character: CharacterType;
};

export const CharacterCard = (props: PropsType) => {
  const {id, name, image, status} = props.character

  return (
    <Card name={name}>
      <Link href={`/characters/${id}`}>
        <ImageBlock>
          <Image src={image} alt={name} width={300} height={300} priority />
        </ImageBlock>
      </Link>
      <Status status={status} src={statusImages[status]}/>
    </Card>
  )
}

const ImageBlock = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 5px 0;
    position: relative;
`
