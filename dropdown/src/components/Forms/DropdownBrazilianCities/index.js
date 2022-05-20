import { useEffect, useState } from "react"

import Dropdown from "../Dropdown"

import { fetchCitiesForState, parseCities } from "../../../helpers/ibge"

const DropdownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    setCities([{label: 'Carregando...', value: ''}])
    fetchCitiesForState(state)
      .then(parseCities)
      .then(setCities)
  }, [state])

  const dropdownOptions = {
    id, 
    name,
    data: cities,
    onChange
  }

  return (
    <Dropdown {...dropdownOptions} />
  )
}

export default DropdownBrazilianCities