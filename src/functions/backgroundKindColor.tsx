
export function backgroundKindColor(kind: string) {

    let color = '';

    switch (kind) {
        case 'grass':
            color = '#42A04B'
            break;
        case 'poison':
            color = '#B27CE9'
            break;
        case 'fire':
            color = '#DB4729'
            break;
        case 'water':
            color = '#0F72C1'
            break;
        case 'electric':
            color = '#F2AF29'
            break;
        case 'ground':
            color = '#3B5249'
            break;
        case 'normal':
            color = '#39A2AE'
            break;
        case 'bug':
            color = '#709938'
            break;
        case 'fairy':
            color = '#DB5ABA'
            break;
        case 'fighting':
            color = '#f4e2d5'
            break;
        case 'psychic':
            color = '#4B244A'
            break;
        case 'rock':
            color = '#696865'
            break;
        case 'ghost':
            color = '#574d5b'
            break;
        case 'ice':
            color = '#7abae1'
            break;
        case 'dark':
            color = '#474f52'
            break;
        case 'steel':
            color = '#6e7b9f'
            break;
        case 'dragon':
            color = '#f1b46b'
            break;

    }

    return color;

}