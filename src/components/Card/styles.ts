import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { myFonts } from '../../constants'
import { backgroundKindColor } from '../../functions/backgroundKindColor';
import { kindColors } from '../../functions/kindColors';
import { ITypes } from '../../interfaces';

interface DivProps extends InputHTMLAttributes<HTMLDivElement> {

    pokemonName: string;
    kind: Array<ITypes>;
}

interface iKindPokemon extends InputHTMLAttributes<HTMLDivElement> {

    kind: string;
}

export const Container = styled.div`

cursor: pointer;
box-sizing: border-box;
height: 240px;
width: 244px;
background: ${(props: DivProps) => { return backgroundKindColor(props.kind[0].type.name) }};
display: flex;
padding: 20px 20px 20px 20px;
border-radius: 26px;
color:#FFF;
margin: 15px;
flex-direction: column;
position: relative;
box-shadow: 8px 9px 7px -4px rgba(0,0,0,0.52);

span {

    font-family: ${myFonts.title};
    font-size: 22pt;
    font-weight:bold;
}


:hover :nth-child(2){
    animation: shakePokemon 0.1s linear 3 forwards ;
}

@keyframes shakePokemon {

0%{
 transform: translateX(0%);
}

25%{
    transform: translateX(-5%) ;
}

50%{
    transform: translateX(0%)
}

75%{
    transform: translateX(5%);
}

100%{
    transform: translateX(0%);
}

}


@media (max-width:480px){

width:100%;

}

`;

export const KindPokemon = styled.div`

background-color: ${(props: iKindPokemon) => kindColors(props.kind)};
width: 87px;
height:44px;
border-radius:36px;
display: flex;
justify-content: center;
align-items: center;
margin-top:10px;
font-family: ${myFonts.title};
font-weight: bold;
font-size: 14pt;
position: relative;
z-index: 4;
`;

export const PokemonStyledIMG = styled.img`
  position: absolute;
  z-index: 5;
    height:178px;
    right: 0;
    bottom: 0;

`;

export const PokebolaImg = styled.img`
    position: absolute;
    z-index: 3;
    opacity: 0.25;
    height:178px;
    right: 10%;
    bottom: 10%;

`;

export const PokeCode = styled.div`
    position: absolute;
    z-index: 3;
    height:178px;
    top:10px;
    right:30px;
    font-family: ${myFonts.title};
    font-weight: bold;
    font-size: 14pt;
`;