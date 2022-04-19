import { useState } from 'react'

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
      .then(console.log())
    
    console.log('handleInputChange', e.target.value)
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="search">Game search</label>
        <input name="search" id="search" onChange={handleInputChange} />
      </form>
      <div className="search-results">
        <ul>
          <li><span>Mario</span></li>
          <li><span>Zelda</span></li>
          <li><span>Donkey Kong</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
