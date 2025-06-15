let foundPokemon = true;

fetchData();

function getStat(data, statName) {
    const statObj = data.stats.find(s => s.stat.name === statName);
    return statObj ? statObj.base_stat : 'n/a'; 
}

async function fetchData() {
    const form = document.getElementById('pokemon-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        try {
            const name = document.getElementById('pokemon-input').value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

            if (!response.ok) {
                throw new Error("Could not fetch data");
            }

            const data = await response.json();

            // Karte erst anzeigen, wenn alles okay ist
            createPokemonData(data);
        } catch (error) {
            console.log(error);
            alert("Did not find the Pokémon");

            // Karte verstecken, wenn Fehler auftritt
            const card = document.getElementById('pokemon-card');
            if (card) card.style.display = "none";
        }
    });
}

function createPokemonData(data) {
    if(foundPokemon){
        const card = document.getElementById('pokemon-card');
        const container = document.querySelector('.container');
        const body = document.querySelector('body');

        card.style.display = "block";

        document.getElementById('pokemon-image').src = data.sprites.front_default;
        document.getElementById('pokemon-image').alt = data.name;

        document.getElementById('pokemon-name').textContent = data.name;

        try{
            document.getElementById('pokemon-type').textContent = data.types.map(t => t.type.name).join(", ");
            document.getElementById('pokemon-height').textContent = data.height;
            document.getElementById('pokemon-weight').textContent = data.weight;
            document.getElementById('pokemon-id').textContent = data.id;
            document.getElementById('pokemon-hp').textContent = getStat(data, 'hp');
            document.getElementById('pokemon-attack').textContent = getStat(data, 'attack');
            document.getElementById('pokemon-defense').textContent = getStat(data, 'defense');
            document.getElementById('pokemon-special').textContent = getStat(data, 'special-attack');
        }
        catch(error){
            console.log(error);
        }

        container.style.marginTop = "-40em";
        body.style.paddingBottom = "12em";
    }
}