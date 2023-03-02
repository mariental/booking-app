import Navbar from '../navbar/navbar';

export function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  );
}

export default Layout;
