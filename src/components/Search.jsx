import React, { useState, useEffect } from "react"
import axios from "axios"

const Search = () => {
  const [term, setTerm] = useState("programming")
  const [results, setResults] = useState([])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      })

      setResults(data.query.search)
    }

    const timeoutId = setTimeout(() => {
      if (term) {
        search()
      }
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    )
  })

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}

export default Search
