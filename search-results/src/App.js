import './App.css';

function App() {
  const handleInputChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    if(value) return
    
    console.log(e.target.value)
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
