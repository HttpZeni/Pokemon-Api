import { addParticleImage } from './background.js';

const form = document.getElementById('pokemon-form');
const card = document.getElementById('pokemon-card');
const container = document.querySelector('.container');
const body = document.querySelector('body');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('pokemon-input').value.toLowerCase();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error('Could not fetch data');

    const data = await response.json();
    createPokemonData(data);

    if (data.sprites.front_default) {
        for(let i = 0; i < 10; i++) {
            addParticleImage(data.sprites.front_default);
        }
    }

  } catch (err) {
    alert('Did not find the Pokémon');
    card.style.display = 'none';
  }
});

function getStat(data, statName) {
  const statObj = data.stats.find(s => s.stat.name === statName);
  return statObj ? statObj.base_stat : 'n/a';
}

function createPokemonData(data) {
  card.style.display = 'block';

  document.getElementById('pokemon-image').src = data.sprites.front_default;
  document.getElementById('pokemon-image').alt = data.name;

  document.getElementById('pokemon-name').textContent = data.name;
  document.getElementById('pokemon-type').textContent = data.types.map(t => t.type.name).join(', ');
  document.getElementById('pokemon-height').textContent = data.height;
  document.getElementById('pokemon-weight').textContent = data.weight;
  document.getElementById('pokemon-id').textContent = data.id;
  document.getElementById('pokemon-hp').textContent = getStat(data, 'hp');
  document.getElementById('pokemon-attack').textContent = getStat(data, 'attack');
  document.getElementById('pokemon-defense').textContent = getStat(data, 'defense');
  document.getElementById('pokemon-special').textContent = getStat(data, 'special-attack');

  container.style.marginTop = '-40em';
  body.style.paddingBottom = '12em';
}
