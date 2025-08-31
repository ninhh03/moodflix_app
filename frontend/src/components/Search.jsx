import React from 'react'
import searchImg from '../assets/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src={searchImg} alt=""/>
        <input type="text" placeholder="Search movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search
