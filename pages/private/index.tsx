import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'
import {LoginNavigate} from 'assets/hoc/LoginNavigate'

const Private = () => {

  return (
    <LoginNavigate>
      <PageWrapper>
        PRIVATE PAGE
      </PageWrapper>
    </LoginNavigate>
  )
}

Private.getLayout = getLayout
export default Private