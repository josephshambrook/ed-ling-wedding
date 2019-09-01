import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>English</h1>
    <Link to="en/faq">Go to FAQ</Link>
  </Layout>
)

export default IndexPage
