import styled from 'styled-components';
import { myFonts } from '../../constants/'
import pokeballLogo from '../../assets/pokeball-logoBG.png'
import { backgroundKindColor } from '../../functions/backgroundKindColor';
import { kindColors } from '../../functions/kindColors';
import { InputHTMLAttributes } from 'react';

interface iDarkBackgroundModal {

    visible: string;
    modalPosition?: string;
}

interface iModal extends InputHTMLAttributes<HTMLDivElement> {

    backgroundColor: string;
    modalPosition?: string;
}

interface iKindPokemon extends InputHTMLAttributes<HTMLDivElement> {

    kind: string;
    index: number;
}

interface iPkmnImagePosition extends InputHTMLAttributes<HTMLImageElement> {

    pkmnImagePosition?: string;
    pkmnTransition?: string;
    pkmnImageHeight?: string;
    pkmnTranslate?: string;
}

interface iButtonToggle extends InputHTMLAttributes<HTMLDivElement> {

    active:boolean;
    btnColor: string;
}


export const Screen = styled.div`

display:flex;
flex-direction: column;
padding:0 200px 0 200px;
background-color: #E96969;
height: 100vh;
background-image: url(${pokeballLogo});
background-repeat:no-repeat;
background-size: contain;
background-position: 90%;
position: relative;
overflow: hidden;


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

export const ModalBackground: any = styled.div<iDarkBackgroundModal>`

background-color: rgba(0,0,0,0.5);


width:100vw;
height:100vh;
position: absolute;
left: 0;
z-index:6;
display: flex;
align-items: center;
justify-content: center;
top: ${(props) => props.modalPosition};
//display: ${(props) => props.visible};
overflow: hidden;
transition:0.5s ease-in-out;

`;

export const Modal: any = styled.div<iModal>`

color:#FFF;
width: 30vw;
height: 95vh;
background-color:${(props) => backgroundKindColor(props.backgroundColor)};
background-repeat: no-repeat;
background-position: top;
background-size: cover;
border-radius: 25px;
box-shadow: 8px 9px 7px -4px rgba(0,0,0,0.52);
box-sizing: border-box;
padding: 30px 50px 30px 50px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;


header{

display:flex;
margin-bottom: 20px;
width:100%;
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

export const PokeballBackGround = styled.img`

width: 100%;
position: absolute;
left: 0;
animation: rotatePokeBall infinite 4s linear;

@keyframes rotatePokeBall{

to {
    transform: rotate(360deg);
}

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

export const KindPokemon = styled.div<iKindPokemon>`

background-color: ${(props) => kindColors(props.kind)};
transform: ${(props) => {return (props.index===1) && 'translateY(110%)'}};
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
top:-30px;
z-index: 4;
`;

export const MiddleModal: any = styled.section`

display: flex;
position: relative;
justify-content:center;
width:100%;
height: 40%;

img{
    background-image:#FFF;
    width:100%;
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
    z-index:22;
`;

export const PokemonImgStyled = styled.img<iPkmnImagePosition>`

position: relative;
transition: ${(props) => props.pkmnTransition} ;
left:${(props) => props.pkmnImagePosition} ;
transform-origin: bottom center;
transform: ${(props)=> props.pkmnTranslate};
z-index: 10;
object-fit: contain;

:hover{
    animation: movePokemon infinite 1s linear;
}

@keyframes movePokemon {

    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-15deg) translateX(-10%);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(15deg) translateX(10%);
    }
    100%{
        transform: rotate(0deg);
    }
}

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
    z-index:22;
`;

export const FooterModal = styled.footer<any>`

position: absolute;
width: 100%;
left:0;
height:50%;
background-color: #FFF;
box-sizing: border-box;
font-size:22pt;
line-height: 50px;
font-weight: bold;
padding:30px 20px 30px 20px;
font-family: ${myFonts.title};
color: #666666;
border-radius:25px;
bottom:0;
text-align: center;
transition: 0.4s linear;
transform: ${(props)=>props.transformFooterModal};

@media (min-width: 320px) and (max-width:480px){

font-size:16pt;

}

@media (min-width: 767px) and (max-width:1024px){

    font-size:22pt;

}

@media (min-width: 1023px) and (max-width:1366px){

font-size:28pt;

}

`;

export const TitleFooter = styled.div`

display:flex;
width:100%;
justify-content:space-around;
margin-bottom: 30px;

@media (min-width: 320px) and (max-width:480px){

font-size:16pt;
margin-bottom: 10px;

}

`;

export const ButtonToggle = styled.div<iButtonToggle>`


box-sizing: border-box;
border:2px solid #666666;
padding: 10px;
border-radius:10px;
cursor: pointer;
border-color: ${(props => props.active? kindColors(props.btnColor): '')};
color:  ${(props=> props.active? '#FFF' : '')};
background-color: ${(props=> props.active? kindColors(props.btnColor) : 'rgba(0,0,0,0)')};


@media (min-width: 320px) and (max-width:480px){

padding: 5px;
font-size:14pt


} 
`;

export const DescriptionStyled = styled.div`

`;