const axios = require('axios');
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


async function generateJson() {

    let vectorPokemon = [];

    try {
        for (let i = 1; i <= 380; i++) {

            const fetchPokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

            const pokemon = fetchPokemonList.data;

            const pokemonBehavior = await getPokemonBehavior(pokemon.name);

            const pokemonFormated = {
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types,
                height: pokemon.height,
                weight: pokemon.weight,
                experience:pokemon.base_experience,
                behavior: pokemonBehavior
            };

            vectorPokemon.push(pokemonFormated);
            console.log(pokemonFormated);
        };


        fs.writeFileSync('./newPokemonsList.json', JSON.stringify(vectorPokemon), (err, data) => {

            if (err) { console.error(err); return; }

            console.log("File has been created");
        })


    } catch (error) {

        console.error(error);
    }


}

async function getPokemonBehavior(pokemon) {

    if (pokemon == 'nidoran-f') {
        pokemon = 'nidoran-female';
    }

    if (pokemon == 'nidoran-m') {
        pokemon = 'nidoran-male';
    }

    const fetchBehavior = await axios.get(`https://www.pokemon.com/br/pokedex/${pokemon}`);

        const allDomPage = new JSDOM(fetchBehavior.data.toString()).window.document;

        const pSelected = allDomPage.querySelector('.version-y');

        const pokemonBehavior = pSelected.innerHTML;


        let pkmnBehaviorFormated = pokemonBehavior.trim();
        pkmnBehaviorFormated = pkmnBehaviorFormated.replace('/n', '');
        return (pkmnBehaviorFormated);
  
}


//getPokemonBehavior('Pikachu');
generateJson();