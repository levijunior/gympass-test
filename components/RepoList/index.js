import React from 'react'
import Card from '../Card'
import { setDate, mS } from '../../helpers'

import License from '../../static/license.svg'
import Forks from '../../static/forks.svg'
import Star from '../../static/star.svg'
import Issue from '../../static/issue.svg'

import styles from './repolist.scss'

const RepoList = props => (
  <section className={styles.repolist}>
    {props.repositories.map( item => 
      <Card key={item.id}>
        <div className={styles.item_list}>
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
)
  
export default RepoList;