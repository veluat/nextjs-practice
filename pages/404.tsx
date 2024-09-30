import Image from 'next/image'
import img404 from 'public/404.png'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import {Button} from '../components/Button/Button'

const NotFound = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <Container>
      <BackButton onClick={handleGoBack}>HOME</BackButton>
      <Title>ERROR 404</Title>
      <Image src={img404} alt={'Not Found'} width={300} height={300}/>
      <Title>PAGE NOT FOUND</Title>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
`

const BackButton = styled(Button)`
    width: 150px;
    margin: 20px 0 60px;
`

const Title = styled.span`
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: #fa52d3;
`

