import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/main.scss';

const Repos = () => (
  <div>
    <Head>
      <title>Repos</title>
    </Head>

    <Layout>
      Home
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

export default Repos
