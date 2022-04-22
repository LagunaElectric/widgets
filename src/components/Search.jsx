import React, { useState } from "react"

const Search = () => {
  const [term, setTerm] = useState("")

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="searchInput">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
            id="searchInput"
          />
        </div>
      </div>
    </div>
  )
}

export default Search
