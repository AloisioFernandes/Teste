const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

const responseToJson = (response) => response.json()

export const parseStates = (states) => {
  return states.map((state) => {
    return {label: state.nome, value: state.sigla}
  }).sort((a, b) => {
    return a.label.localeCompare(b.label)
  })
}

export const parseCities = (cities) => {
  return cities.map((city) => {
    const {id, nome} = city
    return {label: nome, value: id}
  }).sort((a, b) => {
    return a.label.localeCompare(b.label)
  })
}

export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`
  return fetch(url).then(responseToJson)
}

export const fetchCitiesForState = (state) => {
  if(!state) return Promise.resolve([])
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`
  return fetch(url).then(responseToJson)
}