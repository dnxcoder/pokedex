const axios = require('axios');
const fs = require('fs');

async function generateJson() {

    let vectorPokemon = [];

    try {
        for (let i = 1; i <= 898; i++) {

            const fetchPokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

            const pokemon = fetchPokemonList.data;

            const pokemonFormated = {
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types,
                height: pokemon.height,
                weight: pokemon.weight,
            };

            vectorPokemon.push(pokemonFormated);

        };


        fs.writeFileSync('./pokemonsList.json', JSON.stringify(vectorPokemon), (err, data) => {

            if (err) { console.error(err); return; }

            console.log("File has been created");
        })

    } catch (error) {

        console.error(error);
    }


}
generateJson();