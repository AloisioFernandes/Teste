import { useState } from 'react'

import './App.css';
import DropdownBrazilianCities from './components/Forms/DropdownBrazilianCities';
import DropdownBrazilianStates from './components/Forms/DropdownBrazilianStates';

function App() {

  const [formValue, setFormValue] = useState({})

  const handleInputChange = (e) => {
    e.preventDefault()
    const { formValue, name } = e.target
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="state">Estado:</label>
        <DropdownBrazilianStates onChange={handleInputChange} />
        <label htmlFor="city">Cidade:</label>
        <DropdownBrazilianCities />
      </form>
    </div>
  );
}

export default App;
