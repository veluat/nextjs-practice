import {NextPage} from 'next'
import {PropsWithChildren, ReactElement} from 'react'
import {PagesLayout} from '../PagesLayout/PagesLayout'
import {MainLayout} from '../MainLayout/MainLayout'

interface BaseLayoutProps extends PropsWithChildren {
  isHomePage: boolean;
}

export const BaseLayout: NextPage<BaseLayoutProps> = (props) => {
  const {children, isHomePage} = props
  return isHomePage ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <PagesLayout>{children}</PagesLayout>
  )
}

export function getLayout(page: ReactElement, isHomePage: boolean) {
  return <BaseLayout isHomePage={isHomePage}>{page}</BaseLayout>
}