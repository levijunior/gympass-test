import React, { useEffect } from 'react'
import Card from '../Card'
import Link from 'next/link'
import Connect from "../../store/config/connect"
import styles from './commit-list.scss'

const CommitsList = props => {
  console.log(props)
  return (
    <ul className={styles.commitsList}>
      {props.commits.map( item => (
        <Card key={item.sha}>
          <li>
              {item.commit.message}
          </li>
        </Card>	
      ))}
    </ul>
  )
}

export default CommitsList