import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'
import * as path from 'path'
import fs from 'fs/promises'

export const getStaticProps = async (): Promise<{ props: { title: string } }> => {
  const filePath = path.join(process.cwd(), 'public', 'staticData.json')

  try {
    const jsonData = await fs.readFile(filePath)
    const {title} = JSON.parse(jsonData.toString())

    return {
      props: {
        title,
      },
    }
  } catch (err) {
    return {
      props: {
        title: 'No title',
      },
    }
  }
}

type Props = {
  title: string
}

const Test = (props: Props) => {
  const {title} = props

  return (
    <PageWrapper>
      {title}
    </PageWrapper>
  )
}

Test.getLayout = getLayout
export default Test