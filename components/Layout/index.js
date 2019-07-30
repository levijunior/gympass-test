import Header from '../Header'
import styles from './layout.scss'
import Provider from "../../store/config/provider";

const Layout = props => (
  <Provider>
    <main className={styles.main}>
      <Header />
      {props.children}
    </main>
  </Provider>
  );
  
export default Layout;