import { useEffect } from 'react'

import { fetchStates } from '../../../helpers/ibge'

const DropdownBrazilianStates = () => {
  useEffect(() => {
    fetchStates().then()
  }, [])

  return (
    <select id="state">
      <option value="">Selecione um estado...</option>
    </select>
  )
}

export default DropdownBrazilianStates