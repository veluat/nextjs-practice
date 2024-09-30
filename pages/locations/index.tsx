import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {Card} from 'components/Card/Card'
import {LocationType, ResponseType} from 'assets/api/rick-and-morty-api'
import {dehydrate, useQuery} from '@tanstack/react-query'
import {QueryClient} from '@tanstack/query-core'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'


const getLocations = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/location', {
    method: 'GET',
  })
  return await res.json()
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

  if (!locations) return null

  const locationsList = locations.results.map(location => (
    <Card key={location.id} name={location.name}/>
  ))

  return (
    <PageWrapper>
      {locationsList}
    </PageWrapper>
  )
}

Locations.getLayout = getLayout
export default Locations