import Header from '../Header'
import styles from './layout.scss'
import Provider from "../../store/config/provider";
import Connect from "../../store/config/connect";

const Layout = props => (
  <Provider>
    <main className={styles.main}>
      <Header />
      {props.children}
    </main>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap');
      html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
      }
      body {
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
  </Provider>
  );
  
export default Connect()(Layout);