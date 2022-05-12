import { useEffect, useState } from "react"

import { fetchCitiesForState } from "../../../helpers/ibge"

const DropdownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchCitiesForState(state).then((cities) => {
      return cities.map((city) => {
        const {id, nome} = city
        return {label: nome, value: id}
      })
    }).then((cities) => {
      setCities(cities)
    })
  }, [state])

  return (
    <select id={id || name} name={name || id} onChange={onChange}>
      <option value="">Selecione uma cidade...</option>
      {cities.map((city) => {
        const { value, label } = city
        return (<option value={value} key={value}>{label}</option>)
      })}
    </select>
  )
}

export default DropdownBrazilianCities