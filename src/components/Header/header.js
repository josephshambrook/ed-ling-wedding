import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import happiness from "../../images/double-happiness.svg"
import styles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "double-happiness.png" }) {
        childImageSharp {
          fixed(height: 200, quality: 100, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <img className={styles.svg} src={happiness} />
      {/* <Img fixed={data.placeholderImage.childImageSharp.fixed} /> */}
      <h1>
        <Link to="/" className={styles.link}>
          Ling Zhu
          <br />
          &<br />
          Edward Shambrook
        </Link>
      </h1>
    </header>
  )
}

export default Header
