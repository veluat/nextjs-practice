import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import {Card} from '../../components/Card/Card'
import {LocationType, ResponseType} from '../../assets/api/rick-and-morty-api'
import {Header} from '../../components/Header/Header'
import {dehydrate, useQuery} from '@tanstack/react-query'
import {QueryClient} from '@tanstack/query-core'
import {getLayout} from '../../components/layout/baseLayout/BaseLayout'


const getLocations = async () => {
  const result = await fetch('https://api.rickandmortyapi.com/api/location')
  return result.json()
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(['locations'], getLocations)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}


const Locations = () => {
  const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

  if (!locations) {
    return null
  }

  const locationsList = locations.results.map(location => (
    <Card key={location.id} name={location.name}/>
  ))

  return (
    <PageWrapper>
      <Header/>
      {locationsList}
    </PageWrapper>
  )
}

Locations.getLayout = getLayout
export default Locations