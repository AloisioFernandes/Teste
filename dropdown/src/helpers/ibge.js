const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

const responseToJson = (response) => response.json()

const sortByLabelAscending = (a, b) => {
  return a.label.localeCompare(b.label)
}

export const parseStates = (states) => {
  const data = states
  .map((state) => ({label: state.nome, value: state.sigla}))
  .sort(sortByLabelAscending)

  const defaultOption = { label: "Selecione o estado...", value: "" }
  return [defaultOption, ...data]
}

export const parseCities = (cities) => {
  const data = cities
  .map((city) => ({label: city.nome, value: city.id}))
  .sort(sortByLabelAscending)

  const defaultOption = { label: "Selecione a cidade...", value: "" }
  return [defaultOption, ...data]
}

export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`
  return fetch(url, {cache: 'force-cache'}).then(responseToJson)
}

export const fetchCitiesForState = (state) => {
  if(!state) return Promise.resolve([])
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`
  return fetch(url, {cache: 'force-cache'}).then(responseToJson)
}