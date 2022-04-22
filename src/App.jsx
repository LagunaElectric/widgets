import React from "react"
import Search from "./components/Search"
// import Accordion from "./components/Accordion"

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework."
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers."
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components."
  }
]

const App = () => {
  return (
    <>
      {/* <Accordion items={items} /> */}
      <Search />
    </>
  )
}

export default App
