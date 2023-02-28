
const SUPERHERO_TOKEN = '10226406928912557'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const getNewHero = document.getElementById('getNewHero')
const heroImage = document.getElementById('heroImage')
const search = document.getElementById('search')
const searchInput = document.getElementById('searchInput')

//SUPERHERO FUNCTION
const getSuperHero = (id, name) => {

  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      const superHero = json
      showHeroInfo(superHero)
    })
}

// RANDOM HERO FUNC THAT GOES INSIDE GETSUPERHERO()
const getRandomHero = () => {
  const numberOfHeros = 731
  return Math.floor(Math.random() * numberOfHeros) + 1
}

//  SEARCHEDHERO FUNCTION
const getSearchedHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero)
    })
}


//2 FUNCTIONS
//STAT NAME TO EMOJI & SHOW HERO INFO IN HTML FUNCTION
const statToEMoji = {
  intelligence: '🧠',
  speed: '🏃‍♂️',
  durability: '🏋️‍♂️',
  strength: '💪',
  combat: '⚔️',
  power: '⚡️'
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src = "${character.image.url}" height = 200 width = 200 />`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEMoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  heroImage.innerHTML = `${name}${img}${stats}`
}

//CALLING FUNCTIONS 
getNewHero.onclick = () => getSuperHero(getRandomHero())

search.onclick = () => getSearchedHero(searchInput.value)


