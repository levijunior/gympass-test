import React from 'react'
import style from './header.scss'
import Logo from '../../static/logo-github.svg'

const Header = props => (
    <header className={style.header}>
      <div className={style.brand}>
         <Logo />
      </div>
    </header>
  );
  
export default Header;