const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`
  return fetch(url).then(response => response.json())
}