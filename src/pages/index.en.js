import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import Intro from "../components/Intro/intro"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteIntroQueryEn {
      site {
        siteMetadata {
          dateLongEn
        }
      }
    }
  `)

  return (
    <Layout lang="en">
      <SEO title="Home" />
      <Intro>
        <h1>Edward & Ling</h1>
        <h2>{data.site.siteMetadata.dateLongEn}</h2>
      </Intro>
    </Layout>
  )
}

export default IndexPage
