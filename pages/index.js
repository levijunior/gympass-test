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
        repositories={props.data}
      />
    </Layout>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap');
      html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
      }
      body {
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
  </div>
)

Repos.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/orgs/reactjs/repos');
  const data = await res.json();

  return {
    data
  };
};

export default Repos
