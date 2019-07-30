import React from 'react'
import style from './header.scss'
import Logo from '../../static/logo-github.svg'
import { filterRepositories } from '../../store/repos'
import Connect from '../../store/config/connect'

const Header = props => { 
  const onHandleChange = e => {
    let filterQuery = e.target.value
    props.dispatch(filterRepositories(filterQuery))
  }
  
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <Logo /> /reactjs
      </div>
      <div className={style.search}>
        <input type="text" onChange={ onHandleChange } />
      </div>
    </header>
  )
}

export default Connect()(Header);