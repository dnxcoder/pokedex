import React from 'react';
import { convertCode } from '../../functions/convertCode';
import { iPokemon } from '../../interfaces';
import { Container } from './styled';

export default function Description(props: iPokemon) {



    return (
        <Container>
            <div>
                <label>ID:</label>
                <span>{convertCode(props.id)}</span>
            </div>
            <div>
                <label>Height:</label>
                <span>{props.height/10} m</span>
            </div>
            <div>
                <label>Weight:</label>
                <span>{props.weight / 10} kgs</span>
            </div>
            <div>
                <label>Experience:</label>
                <span>{props.experience} pts</span>
            </div>
        </Container>

    )
}