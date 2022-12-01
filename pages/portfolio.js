import React from 'react'
import Head from 'next/head'
import PortfolioDetail from '../components/portfolioPage/Main'

const PortfolioPage = () => {
  let title = "testing"
  let metaName = "meta description"
  let metaContent=  "meta content"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioDetail />
    </div>
  )
}

export default PortfolioPage