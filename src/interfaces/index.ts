export interface iPokemon {

    id: number;
    name: string;
    type: Array<ITypes>;
    height: number;
    weight: number;
    behavior:string;
    experience:number;

}

export interface ITypes {

    slot: number;
    type: {
        name:string;
        url:string;
    }

}

export interface iPokemonIMG{

    pokeCode:number;
    width?:string;
    height?:string;
    position?:string;
    zindex?:string;
    right?:string;
    bottom?:string;
}

export interface iPkmnImagePosition  {

    pkmnImagePosition?:string;
    pkmnTransition?:string;
    pkmnSize?:string;
}