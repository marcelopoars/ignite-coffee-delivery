import { Outlet } from 'react-router-dom';
import { Header } from '../../_components';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>By Marcelo Pereira</footer>
    </>
  );
}
