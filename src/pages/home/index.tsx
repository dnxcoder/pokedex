import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { Screen, CardsContainer } from './styles';
import pokemonListJson from '../../Json/pokemonsList.json';


import { iPokemon } from '../../interfaces';

export default function Home() {

    const [pokemonList, setPokemonList] = useState<Array<iPokemon>>([]);

    useEffect(() => {

        async function autoLoadPokemons() {

            setPokemonList(pokemonListJson);

        }

        autoLoadPokemons();
    }, []);

    return (
        <Screen>
            <CardsContainer>
                {
                    pokemonList.map((pokemon) => {



                        return (
                            <Card
                                pokemonName={pokemon.name}
                                pokeCode={pokemon.id}
                                kind={pokemon.type}
                            />)

                    })
                }
            </CardsContainer>
        </Screen>
    )
}