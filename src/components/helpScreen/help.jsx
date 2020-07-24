import React from "react"
import HelpScreenLevel1 from "./helpScreenLevel1.jsx"
import HelpScreenLevel2 from "./helpScreenLevel2.jsx"
import { render } from "@testing-library/react"

export default function Help({level, display}) {
  console.log(level, display, "Hello")
    if(display === true) {
      return "<div>For help hit :h</div>"
    }
      if(level === 1) {
        return HelpScreenLevel1
      }
      if(level === 2) {
        return HelpScreenLevel2
      }
}
