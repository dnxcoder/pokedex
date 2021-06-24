export function convertCode(code:number){

    let codeFormated = code.toString();

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

    return codeFormated;

} 