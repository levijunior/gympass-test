import React from 'react'
import Card from '../Card'
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
            <span>{item.license ? item.license.spdx_id : ''}</span>
            <span>{item.forks_count}</span>
            <span>{item.stargazers_count}</span>
            <span>{item.open_issues_count}</span>
            <span>{item.updated_at}</span>
          </div>
        </div>
      </Card>
    )}

  </section>
)
  
export default RepoList;