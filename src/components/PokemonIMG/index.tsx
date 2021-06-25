import React from 'react';
import { takePokemonByCode } from '../../functions/takePokemonByCode';
import { iPokemonIMG } from '../../interfaces/';
import { PokemonIMGStyled } from './styles';

export default function PokemonIMG(props: iPokemonIMG) {

    return (

        <PokemonIMGStyled
            {...props} src={takePokemonByCode(props.pokeCode)}
           
        />
    )




}