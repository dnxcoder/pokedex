import React, { InputHTMLAttributes } from 'react';
import { takePokemonByCode } from '../../functions/takePokemonByCode';
import { Container, KindPokemon, PokemonIMG, PokebolaImg, PokeCode } from './styles';
import { ITypes } from '../../interfaces/';
import pokeballImg from '../../assets/pokeball-logo.png'

interface DivProps extends InputHTMLAttributes<HTMLDivElement> {


    pokemonName: string;
    kind: Array<ITypes>;
    pokeCode: number;
}

const Card: React.FC<DivProps> = (props) => {


    let codeFormated = props.pokeCode.toString();

    switch (codeFormated.length) {
        case 1:
            codeFormated = `#00${codeFormated}`;
            break;
        case 2:
            codeFormated = `#0${codeFormated}`;
            break;
        case 3:
            codeFormated = `#${codeFormated}`;
            break;
    }


    console.log(props);

    return (
        <Container {...props}>
            <PokeCode >
                {codeFormated}
            </PokeCode>
            <span>{props.pokemonName}</span>

            {props.kind.map((kind) => (
                <KindPokemon kind={kind.type.name}>
                    {kind.type.name}
                </KindPokemon>
            ))}
            <PokemonIMG src={`${takePokemonByCode(props.pokeCode)}`} />
            <PokebolaImg src={pokeballImg} />

        </Container>
    )

}

export default Card;
