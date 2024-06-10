const POKEMON = fetch('http://localhost:4000/pokemon').then(response => response.json())

// Funções para carregar a box
async function refresh() {
  await fetch('/renderBox')
    .then(response => response.json())
    .then(data => {
      append_json(data);
    });
}
async function append_json(data) {
  data.forEach(function (object) {
    var td = document.getElementById(object.boxIndex)
    td.innerHTML = `<img data-id="${object.boxIndex}" data-action="release" src="./Front/assets/sprites/${object.pokeName.toLowerCase()}.png">`;
  });
}

// Função para deletar Pokémon
async function release(id) {
  await fetch(`releasePoke/${id}`, {
    method: 'DELETE'
  }).then(location.reload());
}


document.addEventListener('DOMContentLoaded', () => {


  const pokemonContainer = document.querySelector("#pokemon_container")
  const pokemonSearchForm = document.querySelector("#search_input")
  const pokemonTable = document.querySelector("#box")

  // Executa ao carregar a página
  refresh();  
  POKEMON.then(data => pokemonContainer.innerHTML = renderAllPokemon(data))

  /************************ Event Listeners *************************************/

  // Adiciona Pokémon ao clicar no ícone do search
  pokemonContainer.addEventListener('click', async (event) => {
    if (event.target.dataset.action === 'add') {
      const targetPoke = await POKEMON.then(r => r.find(pokeObj => pokeObj.dexN == event.target.dataset.id))
      document.getElementById("add").src = `./Front/assets/sprites/${targetPoke.pokeName.toLowerCase()}.png`;
      document.getElementById("dexnum").value = targetPoke.dexN;
    }
  })

  // Mostra somente os Pokémon que estão no search
  pokemonSearchForm.addEventListener('input', async (event) => {
    const filteredPokes = await POKEMON.then(r => r.filter(pokeObj => pokeObj.pokeName.toLowerCase().includes(event.target.value.toLowerCase())))
    const filteredPokeHTML = await renderAllPokemon(filteredPokes)
    pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
  })

  // Mostra botão de remover Pokémon ao clicá-lo na box
  pokemonTable.addEventListener('click', async (event) => {
    if (event.target.dataset.action === 'release') {
      let div = document.getElementById('options');
      div.innerHTML = `<button onclick='release(${event.target.dataset.id})'>RELEASE</button>`
    }
  })

})



/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}

function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <img data-id="${pokemon.dexN}" data-action="add" src="./Front/assets/sprites/${pokemon.pokeName.toLowerCase()}.png">
  </div>`)
}
