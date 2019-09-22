import React from "react"
import { mainLink, bar, list } from "./nav.module.css"

const Nav = ({ lang, siteTitle }) => {
  return (
    <header className={bar}>
      <a href={`/${lang}`} className={mainLink}>
        <h3>{siteTitle}</h3>
      </a>
      <nav>
        <ul className={list}>
          <li>
            <a href={`/${lang}/faq`}>FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
