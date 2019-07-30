import Header from '../Header'

const Layout = props => (
    <main >
      <Header />
      {props.children}
    </main>
  );
  
export default Layout;