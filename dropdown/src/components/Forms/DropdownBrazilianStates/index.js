import { useEffect, useState } from 'react'

import Dropdown from '../Dropdown'

import { fetchStates, parseStates } from '../../../helpers/ibge'

const DropdownBrazilianStates = ({ id, name, onChange = () => {} }) => {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates)
  }, [])

  const dropdownOptions = {
    id,
    name,
    data: states,
    onChange
  }

  return (<Dropdown {...dropdownOptions} />)
}

export default DropdownBrazilianStates