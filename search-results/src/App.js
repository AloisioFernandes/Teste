import { useState } from 'react'

import SearchResults from './components/SearchResults';

import './App.css';

function App() {
  const [data, setData] = useState([])
  
  const handleInputChange = (e) => {
    e.preventDefault()
    const { value } = e.target

    if(!value) return

    const url = `http://localhost:8337/games?q=${value}`

    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => setData(data))
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="search">Game search</label>
        <input name="search" id="search" onChange={handleInputChange} />
      </form>
      <SearchResults data={data} /> 
    </div>
  );
}

export default App;
