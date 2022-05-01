import { useEffect, useState } from 'react'

import { fetchStates } from '../../../helpers/ibge'

const DropdownBrazilianStates = () => {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetchStates().then((states) => {
      setStates(states)
    })
  }, [])

  return (
    <select id="state">
      <option value="">Selecione um estado...</option>
      {states.map((state) => {
        const {sigla, nome} = state
        return (<option key={sigla} value={sigla}>{nome}</option>)
      })}
    </select>
  )
}

export default DropdownBrazilianStates