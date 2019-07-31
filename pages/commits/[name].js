import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import CommitsList from '../../components/CommitsList'
import '../../styles/main.scss'


const Commits = props => {
	const limit = 20
	const commits = props.commits.slice(0, limit)
	return (
		<div>
			<Head>
				<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico" />
				<title>Commits from /{props.name}</title>
			</Head>

			<Layout>
				<CommitsList
					{...props}
				/>
			</Layout>
		</div>
	)
}

Commits.getInitialProps = async function({ query }) {
	const name = query.name
  const res = await fetch(`https://api.github.com/repos/reactjs/${name}/commits`);
  const commits = await res.json();

  return {
		name,
    commits
  };
};

export default Commits
