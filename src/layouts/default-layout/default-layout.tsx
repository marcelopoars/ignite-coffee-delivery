import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../_components';

import { DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </DefaultLayoutContainer>
  );
}
