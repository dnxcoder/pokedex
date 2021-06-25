import styled from 'styled-components';
import { myFonts } from '../../constants/'
import pokeballLogo from '../../assets/pokeball-logoBG.png'
import { backgroundKindColor } from '../../functions/backgroundKindColor';
import { kindColors } from '../../functions/kindColors';
import { InputHTMLAttributes } from 'react';

interface iDarkBackgroundModal {

    visible: string;
}

interface iModal extends InputHTMLAttributes<HTMLDivElement> {

    backgroundColor: string;
}

interface iKindPokemon extends InputHTMLAttributes<HTMLDivElement> {

    kind: string;
}


export const Screen = styled.div`
display:flex;
flex-direction: column;
padding:0 200px 0 200px;
background-color: #E96969;
height: 100vh;
overflow: hidden;
background-image: url(${pokeballLogo});
background-repeat:no-repeat;
background-size: contain;
background-position: 90%;

@media (max-width:480px){

    padding: 0 5px 0 5px;
}

@media (max-width:768px){

padding: 0 5px 0 5px;
}

@media (max-width:1400px){

padding: 0 5px 0 5px;
}
`;

export const CardsContainer = styled.div`


display: flex;
justify-content:center;
flex-wrap: wrap;
flex-direction: row;
overflow: auto;
scrollbar-width: 0;
::-webkit-scrollbar{
    display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
height: 70vh;

`;

export const Header = styled.header`

height: 30vh;
display: flex;
align-items: center;

span{
    font-size: 42pt;
    font-family: ${myFonts.title};
    font-weight: bold;
    color:#FFF;
    text-shadow: 2em;
}
`;

export const PokeBallImg = styled.img`
user-select: none;
opacity:0.25;
position:absolute;
top:5%;
right: 10%;
`;

export const ModalBackground: any = styled.div`

background-color: rgba(0,0,0,0.5);


width:100vw;
height:100vh;
position: absolute;
left: 0;
z-index:6;
display: flex;
align-items: center;
justify-content: center;
display: ${(props: iDarkBackgroundModal) => props.visible};


`;

export const Modal: any = styled.div`

color:#FFF;
width: 30vw;
height: 95vh;
background-color:${(props: iModal) => backgroundKindColor(props.backgroundColor)};
background-image: url(${pokeballLogo});
background-repeat: no-repeat;
background-position: top;
background-size: cover;
border-radius: 25px;
box-shadow: 8px 9px 7px -4px rgba(0,0,0,0.52);
box-sizing: border-box;
padding: 30px 50px 30px 50px;
position: relative;
overflow: hidden;


header{

display:flex;
justify-content:space-between;
font-family: ${myFonts.title};
font-weight: bold;
font-size: 2.5em;

};

@media (min-width: 320px) and (max-width:480px){
width: 95%;
padding: 20px 35px 0 35px;
font-size:0.7em;

}

@media (min-width: 481px) and (max-width:768px){
width: 95%;
padding: 20px 85px 0 85px;

}

@media (min-width: 769px) and (max-width:1024px){
width: 95%;
padding: 20px 35px 0 35px;

}

`;

export const ButtonCloseModal = styled.div`


@media (min-width: 320px) and (max-width:480px){
width:50px;
height:50px;
background-color: #F15152;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
right: 0px;
top: 0px;
border-radius:25px;
font-size:0.7em;
cursor: pointer;
}

@media (min-width: 320px) and (max-width:480px){
width:50px;
height:50px;
background-color: #F15152;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
right: 0px;
top: 0px;
border-radius:25px;
font-size:0.7em;
cursor: pointer;
}

@media (min-width: 768px) and (max-width:1024px){
width:100px;
height:100px;
background-color: #F15152;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
right: 0px;
top: 0px;
border-radius:50px;
font-size:0.7em;
cursor: pointer;
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
position: absolute;
left:0;
z-index: 4;
`;

export const MiddleModal: any = styled.section`

display: flex;
position: relative;
justify-content:center;

img{
    background-image:#FFF;
    width:80%;
}

`;

export const LeftButton = styled.div`

position: absolute;
    left: -5%;
    top:35%;
    border-radius: 4em;
    background-color:${(props: iModal) => kindColors(props.backgroundColor)};
    display: flex;
    align-items: center;
    justify-content:center;
    width:4em;
    height: 4em;
    cursor: pointer;

`;

export const RightButton = styled.div`
    position: absolute;
    right: -5%;
    top: 35%;
    border-radius: 4em;
    background-color:${(props: iModal) => kindColors(props.backgroundColor)};
    display: flex;
    align-items: center;
    justify-content:center;
    width:4em;
    height: 4em;
    cursor: pointer;
`;

export const FooterModal: any = styled.footer`

position: absolute;
width: 100%;
left:0;
height:50%;
background-color: #FFF;
border-radius:25px;
bottom:0;

@media (max-width:480px){

bottom:0;


}

`;