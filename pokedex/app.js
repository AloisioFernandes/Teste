const colours = [
  { type: 'normal', value: '#A8A77A'},
  { type: 'fire', value: '#EE8130'},
  { type: 'water', value: '#6390F0'},
  { type: 'electric', value: '#F7D02C'},
  { type: 'grass', value: '#7AC74C'},
  { type: 'ice', value: '#96D9D6'},
  { type: 'fighting', value: '#C22E28'},
  { type: 'poison', value: '#A33EA1'},
  { type: 'ground', value: '#E2BF65'},
  { type: 'flying', value: '#A98FF3'},
  { type: 'psychic', value: '#F95587'},
  { type: 'bug', value: '#A6B91A'},
  { type: 'rock', value: '#B6A136'},
  { type: 'ghost', value: '#735797'},
  { type: 'dragon', value: '#6F35FC'},
  { type: 'dark', value: '#705746'},
  { type: 'steel', value: '#B7B7CE'},
  { type: 'fairy', value: '#D685AD'}
]

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(151).fill().map((_, index) => // inicializa um array e preenche com 151 espaços vazios. Usa map para retornar outro array com promises para cada pokemon
  fetch(getPokemonUrl(index + 1)) // faz requisição para api
    .then(response => response.json())) // retorna promise que será armazenada no array

const generateHTML = (pokemons) => pokemons.reduce((accumulator, { name, id, types }) => {
  const elementTypes = types.map(typeInfo => typeInfo.type.name) // extrai o nome do tipo para caso de mais de um

  if(elementTypes.length > 1) {
    accumulator += `
    <li class="card ${elementTypes[0]} ${elementTypes[1]} two-types">
      <img class="card-image" alt"${name}" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" />
      <h2 class="card-title">${id}. ${name}</h2>
      <p class="card-subtitle">${elementTypes.join(' | ')}</p>
    </li>
  `
  } else {
    accumulator += `
    <li class="card ${elementTypes[0]}">
      <img class="card-image" alt"${name}" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" />
      <h2 class="card-title">${id}. ${name}</h2>
      <p class="card-subtitle">${elementTypes.join(' | ')}</p>
    </li>
  `
  }

  return accumulator
}, '')

const insertPokemonsIntoPage = (pokemons) => { // insere componentes de lista pokemon na ul
  const ul = document.querySelector('[data-js="pokedex"]')
  ul.innerHTML = pokemons
  const twoTypes = Object.values(document.getElementsByClassName('two-types'))
  twoTypes.map(elem => {
    const color1 = colours.filter(color => (
      color.type === elem.classList[1]
    ))
    const color2 = colours.filter(color => (
      color.type === elem.classList[2]
    ))
    elem.setAttribute('style', `background-image: linear-gradient(to right, ${color1[0].value}, ${color1[0].value}, ${color2[0].value}, ${color2[0].value})`)
  })
}

const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises) // realiza todas as promises em paralelo
  .then(generateHTML) // obtém dados de cada pokemon
  .then(insertPokemonsIntoPage) // insere cada pokemon na página