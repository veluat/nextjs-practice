import Image from 'next/image'
import {NextPageWithLayout} from './_app'
import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'

const Home: NextPageWithLayout = () => (
  <PageWrapper>
    <Image
      src='/image.png'
      alt='rik.js Logo'
      width={600}
      height={600}
      priority
    />
  </PageWrapper>
)

Home.getLayout = (page) => getLayout(page, true);
export default Home
