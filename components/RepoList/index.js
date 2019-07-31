import React, { useState, useEffect } from 'react'
import Card from '../Card'
import { setDate, mS } from '../../helpers'

import License from '../../static/license.svg'
import Forks from '../../static/forks.svg'
import Star from '../../static/star.svg'
import Issue from '../../static/issue.svg'

import Connect from "../../store/config/connect";
import { getRepositories } from '../../store/repos'

import styles from './repolist.scss'

const handleClick = name => {
  console.log(name)
}

const RepoList = props => {
  const dataRepo = props.repositories
  useEffect(() => {
    props.dispatch(getRepositories(dataRepo))
  }, [])
  let listRepositories = props.store.filter ? props.store.filter.filterRepos : dataRepo

  return (
  <section className={styles.repolist}>
    {console.log(props.store.filter)}
    {listRepositories.map( item => 
      <Card key={item.id}>
        <div className={styles.item_list} onClick={ () => handleClick(props) }>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className={styles.info}>
            <span>{item.language}</span>
            <span><License /> {item.license ? item.license.spdx_id : ''}</span>
            <span><Forks />{item.forks_count}</span>
            <span><Star />{item.stargazers_count}</span>
            <span><Issue />{item.open_issues_count}</span>
            <span>{`Updated on ${setDate(item.updated_at).day} ${mS(setDate(item.updated_at).month)} ${setDate(item.updated_at).fullYear}`}</span>
          </div>
        </div>
      </Card>
    )}
  </section>
)}
  
export default Connect()(RepoList);