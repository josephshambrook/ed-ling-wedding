import React from "react"
import { Link } from "gatsby"

import happiness from "../../images/double-happiness.svg"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <img className={styles.svg} src={happiness} alt="双喜" />
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

export default Header
