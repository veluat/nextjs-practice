import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import {MainLayout} from '../MainLayout/MainLayout'
import {PagesLayout} from '../PagesLayout/PagesLayout'

interface BaseLayoutProps extends PropsWithChildren {
  isHomePage: boolean;
}

const BaseLayout: NextPage<BaseLayoutProps> = ({ children, isHomePage }) => {
  return isHomePage ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <PagesLayout>{children}</PagesLayout>
  );
};

export const getLayout = (page: React.ReactElement, isHomePage: boolean) => {
  return <BaseLayout isHomePage={isHomePage}>{page}</BaseLayout>;
};

export default BaseLayout;