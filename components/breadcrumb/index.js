import React from 'react'
import Link from 'next/link'
import styles from './breadcrumb.scss'

const Breadcrumb = props => (
  <p className={styles.breadcrumb}>
    <Link href="/"><a>Home</a></Link> > Commits > {props.name}
  </p>
)

export default Breadcrumb