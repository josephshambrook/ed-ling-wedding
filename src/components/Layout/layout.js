import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../Nav/nav"

import "src/styles/reset.css"
import "src/styles/variables.css"
import "src/styles/global.css"
import { grid } from "./layout.module.css"

const Layout = ({ lang, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={grid}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <Nav lang={lang} siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        Built by
        {` `}
        <a href="https://josephshambrook.dev">Joseph Shambrook</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
