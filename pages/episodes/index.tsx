import {API} from 'assets/api/api'
import {EpisodeType, ResponseType} from 'assets/api/rick-and-morty-api'
import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {Card} from 'components/Card/Card'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'
import {GetServerSideProps} from 'next'
import Modal from '../../components/Modal/Modal'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../../assets/context/AuthContext'

export const getServerSideProps: GetServerSideProps = async () => {
  /*
  // пример кеширования
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=100')
  */

  const episodes = await API.rickAndMorty.getEpisodes()

  if (!episodes) {
    return {
      notFound: true,
    }
  }

  /*
  // если не Auth, сразу редирект на логнин, например
  // тогда переход будет без "моргания" и показа загрузчиков на странице,
  // так как до UI не дойдет

  const isAuth = тут логика получения Auth на сервере

    if (!isAuth) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }*/

  return {
    props: {episodes},
  }
}

type Props = {
  episodes: ResponseType<EpisodeType>;
  showModal?: boolean;
};

const Episodes = ({episodes, showModal}: Props) => {
  const {isAuth} = useAuth()
  const [modalIsOpen, setModalIsOpen] = useState(showModal || false)
  const router = useRouter()

  const episodesList = episodes.results.map((episode) => (
    <Card key={episode.id} name={episode.name}/>
  ))

  useEffect(() => {
    if (!isAuth) {
      setModalIsOpen(true)
    }
  }, [isAuth])

  const handleCloseModal = () => {
    setModalIsOpen(false)
    router.push('/')
  }

  return (
    <PageWrapper>
      {modalIsOpen ? (
        <Modal isOpen={modalIsOpen} onClose={handleCloseModal}/>
      ) : (
        episodesList
      )}
    </PageWrapper>
  )
}

Episodes.getLayout = getLayout
export default Episodes