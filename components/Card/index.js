import styles from './card.scss'

const Layout = props => (
  <div className={styles.card}>
    {props.children}
  </div>
);
  
export default Layout;