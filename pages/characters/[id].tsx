import {API} from '../../assets/api/api'
import {CharacterType} from '../../assets/api/rick-and-morty-api'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import {Header} from '../../components/Header/Header'
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard'
import {getLayout} from '../../components/layout/baseLayout/BaseLayout'
import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import styled from 'styled-components'

export const getStaticPaths: GetStaticPaths = async () => {
  const {results} = await API.rickAndMorty.getCharacters()

  const paths = results.map(character => ({
    params: {id: String(character.id)}
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const {id} = params || {}

  const character = await API.rickAndMorty.getCharacter(id as string)

  if (!character) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      character
    },
  }
}

type Props = {
  character: CharacterType
}

const Character = (props: Props) => {
  const {character} = props

  const router = useRouter()
  if (router.isFallback) return <h1>Loading...</h1>

  const characterId = router.query.id

  const goToCharacters = () => router.push(`/characters`)

  return (
    <PageWrapper>
      <Wrapper>
      <IdText>ID: {characterId}</IdText>
      <CharacterCard key={character.id} character={character}/>
      <Button onClick={goToCharacters}>GO TO CHARACTERS</Button>
      </Wrapper>
    </PageWrapper>
  )
}

Character.getLayout = getLayout
export default Character

const Wrapper = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
`

const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: #facaff;
    box-shadow: 0 2px 3px 1px #fa52d3;
    margin-top: 5px;
    cursor: pointer;
    color: #551a8b;
    font-size: 20px;
    font-weight: 600;

    &:hover {
        background: #fa52d3;
        color: white;
    }
`

const IdText = styled.div`
    font-size: 40px;
    color: #551a8b;
    font-weight: 600;
`