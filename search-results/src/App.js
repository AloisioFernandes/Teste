import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <label htmlFor="search">Game search</label>
        <input name="search" id="search" />
      </form>
      <div className="search-results">
        <ul>
          <li>Mario</li>
          <li>Zelda</li>
          <li>Donkey Kong</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
