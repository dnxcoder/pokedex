export interface iPokemon {

    id: number;
    name: string;
    type: Array<ITypes>;
    height: number;
    weight: number;

}

export interface ITypes {

    slot: number;
    type: {
        name:string;
        url:string;
    }

}