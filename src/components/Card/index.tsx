import React, { InputHTMLAttributes } from 'react';
import { Container, KindPokemon, PokebolaImg, PokeCode } from './styles';
import { ITypes } from '../../interfaces/';
import pokeballImg from '../../assets/pokeball-logo.png'
import PokemonIMG from '../PokemonIMG'

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

    return (
        <Container {...props} className="card">
            <PokeCode >
                {codeFormated}
            </PokeCode>
            <span>{props.pokemonName}</span>

            {props.kind.map((kind, index) => (
                <KindPokemon kind={kind.type.name} key={index}>
                    {kind.type.name}
                </KindPokemon>
            ))}
            <PokemonIMG
                pokeCode={props.pokeCode}
                height="178px"
                position="absolute"
                zindex="5"
                right="0"
                bottom="0"
            />
            <PokebolaImg src={pokeballImg} />

        </Container>
    )

}

export default Card;
