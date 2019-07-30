import Header from '../Header'
import styles from './layout.scss'

const Layout = props => (
    <main className={styles.main}>
      <Header />
      {props.children}
    </main>
  );
  
export default Layout;