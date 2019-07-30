import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Repos = () => (
  <div>
    <Head>
      <title>Repos</title>
    </Head>

    <Layout>
      Home
    </Layout>

    <style jsx global>{`
      html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
    
  </div>
)

export default Repos
