import {NextPage} from 'next'
import {PropsWithChildren, ReactElement} from 'react'

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <>{children}</>
  )
}

export function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
}

