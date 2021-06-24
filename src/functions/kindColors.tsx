
export function kindColors(kind: string) {

    let color = '';

    switch (kind) {
        case 'grass':
            color = '#7BD783'
            break;
        case 'poison':
            color = '#bf90ee'
            break;
        case 'fire':
            color = '#E77C66'
            break;
        case 'water':
            color = '#61aff0'
            break;
        case 'electric':
            color = '#ffc042'
            break;
        case 'ground':
            color = '#5e7a6f'
            break;
        case 'normal':
            color = '#7bcad3'
            break;
        case 'bug':
            color = '#91b363'
            break;
        case 'fairy':
            color = '#c973b3'
            break;
        case 'fighting':
            color = '#ccbfb6'
            break;
        case 'psychic':
            color = '#7a4779'
            break;
        case 'rock':
            color = '#979590'
            break;
        case 'ghost':
            color = '#85738b'
            break;
        case 'ice':
            color = '#6fa6c9'
            break;
        case 'dark':
            color = '#6c777a'
            break;
        case 'steel':
            color = '#8893b1'
            break;
        case 'dragon':
            color = '#dbae77'
            break;
        case 'flying':
            color = '#f8dfc1'
            break;
    }

    return color;

}