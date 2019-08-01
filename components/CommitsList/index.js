import React, { useEffect } from 'react'
import Card from '../Card'
import Link from 'next/link'
import Connect from "../../store/config/connect"
import styles from './commit-list.scss'

const CommitsList = props => {
  // console.log(props)
  return (
    <ul className={styles.commitsList}>
      {console.log(props.commits)}
      {props.commits.map( item => (
        <Card key={item.sha}>
          <li>
            <div className={styles.container_left}>
              <p className={styles.p_big}>
                {item.commit.message}
              </p>
              <p className={styles.p_small}>
                <b>{item.author.login}</b> authored and <b>{item.committer.login}</b> committed on {item.commit.author.date}
              </p>
            </div>
          </li>
        </Card>	
      ))}
    </ul>
  )
}

export default CommitsList