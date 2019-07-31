import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import '../../styles/main.scss'



const Commits = props => {
	const limit = 20
	const commits = props.commits.slice(0, limit)
	return (
		<div>
			<Head>
				<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico" />
				<title>/{props.name} Commits List</title>
			</Head>

			<Layout>
				<ol>
					{commits.map( item => (
						<li key={item.sha}>
							{item.commit.message}
						</li>
					))}
				</ol>
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
