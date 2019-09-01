import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>中文</h1>
    <Link to="zh/faq">Go to FAQ</Link>
  </Layout>
)

export default IndexPage
