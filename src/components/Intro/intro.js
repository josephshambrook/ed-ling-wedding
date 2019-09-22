import React from "react"
import { intro } from "./intro.module.css"

const Intro = ({ children }) => {
  return <div className={intro}>{children}</div>
}

export default Intro
