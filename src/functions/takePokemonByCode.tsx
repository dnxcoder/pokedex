
export function takePokemonByCode(code: number) {


    let urlImg = '';

    let codeFormated = code.toString();

    switch (codeFormated.length) {
        case 1:
            codeFormated = `00${codeFormated}`;
            break;
        case 2:
            codeFormated = `0${codeFormated}`;
            break;
    }


    urlImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${codeFormated}.png`

    return urlImg;

}