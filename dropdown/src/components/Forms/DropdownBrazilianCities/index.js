import { useEffect, useState } from "react"

import Dropdown from "../Dropdown"

import { fetchCitiesForState, parseCities } from "../../../helpers/ibge"

const DropdownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchCitiesForState(state).then(parseCities).then((cities) => {
      setCities(cities)
    })
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