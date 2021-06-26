import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface iPokemonIMG extends InputHTMLAttributes<HTMLImageElement> {

    pokeCode: number;
    width?: string;
    height?: string;
    position?: string;
    zindex?: string;
    right?: string;
    bottom?: string;
}

export const PokemonIMGStyled = styled(motion.img)`


width:${(props) => props.width};
height:${(props => props.height)};
position:${(props: iPokemonIMG) => props.position} ;
z-index: ${(props: iPokemonIMG) => props.zindex};
right: ${(props: iPokemonIMG) => props.right};
bottom: ${(props: iPokemonIMG) => props.bottom};
object-fit: contain;


@media (min-width:0px) and (max-width:319px){

   height: 50%;
}

@media (min-width:320px) and (max-width:480px){

    height: 90%;
    object-fit: contain;
}

@media (min-width: 481px) and (max-width:768px){
width: 95%;
padding: 20px 35px 0 35px;

}

@media (min-width: 769px) and (max-width:1024px){
height: 90%;
padding: 20px 35px 0 35px;

}

`;