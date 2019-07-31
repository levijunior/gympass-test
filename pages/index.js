import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import RepoList from '../components/RepoList'
import fetch from 'isomorphic-unfetch'
import '../styles/main.scss'

const Repos = props => (
  <div>
    <Head>
      <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico" />
      <title>Repositories List</title>
    </Head>

    <Layout>
      <RepoList 
        {...props}
      />
    </Layout>
  </div>
)

Repos.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/orgs/reactjs/repos');
  const repositories = await res.json();

  return {
    repositories
  };
};

export default Repos
