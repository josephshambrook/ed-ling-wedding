import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Chinese</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="zh/faq">Go to FAQ</Link>
  </Layout>
)

export default IndexPage
