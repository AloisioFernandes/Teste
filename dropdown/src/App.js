
import './App.css';
import DropdownBrazilianCities from './components/Forms/DropdownBrazilianCities';
import DropdownBrazilianStates from './components/Forms/DropdownBrazilianStates';

function App() {
  return (
    <div className="container">
      <form>
        <label htmlFor="state">Estado:</label>
        <DropdownBrazilianStates />
        <label htmlFor="city">Cidade:</label>
        <DropdownBrazilianCities />
      </form>
    </div>
  );
}

export default App;
