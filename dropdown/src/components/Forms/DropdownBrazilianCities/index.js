import { useEffect, useState } from "react"

import { fetchCitiesForState } from "../../../helpers/ibge"

const DropdownBrazilianCities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchCitiesForState('MG').then((cities) => {
      setCities(cities)
    })
  }, [])

  return (
    <select id="city">
      <option value="">Selecione uma cidade...</option>
      {cities.map(city) => {
        return (
          <option value="">Selecione uma cidade...</option>
        )
      }}
    </select>
  )
}

export default DropdownBrazilianCities