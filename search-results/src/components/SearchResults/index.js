const SearchResults = ({ data }) => {
  if(!data || !data.length) return  null
  return (
    <div className="searcr-results">
      <ul>
        <li>
          <span></span>
        </li>
      </ul>
    </div>
  )
}

export default SearchResults