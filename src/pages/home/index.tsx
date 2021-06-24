import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import {
    Screen,
    CardsContainer,
    Header,
    Modal,
    ModalBackground,
    MiddleModal,
    FooterModal,
    KindPokemon,
    LeftButton,
    RightButton
} from './styles';
import pokemonListJson from '../../Json/pokemonsList.json';

import { iPokemon } from '../../interfaces';
import { convertCode } from '../../functions/convertCode';
import { ArrowBackSharp, ArrowForwardSharp } from 'react-ionicons'
import { takePokemonByCode } from '../../functions/takePokemonByCode';

export default function Home() {

    const [pokemonList, setPokemonList] = useState<Array<iPokemon>>([]);
    const [modalVisible, setModalVisible] = useState('none');
    const [selectedPokemon, setSelectedPokemon] = useState<iPokemon>();

    useEffect(() => {

        async function autoLoadPokemons() {

            setPokemonList(pokemonListJson);

        }

        autoLoadPokemons();
    }, []);

    function openModal(props: iPokemon) {


        setSelectedPokemon({ ...props });
        setModalVisible('flex');

    }

    function closeModal(event: MouseEvent) {

        event.stopPropagation();
        setModalVisible('none');
    }

    return (
        <Screen>

            <Header>
                <span>Welcome to Pokedex Online</span>
            </Header>
            <CardsContainer>
                {
                    pokemonList.map((pokemon) => {

                        return (
                            <Card
                                pokemonName={pokemon.name}
                                pokeCode={pokemon.id}
                                kind={pokemon.type}
                                onClick={() => openModal({ ...pokemon })}
                            />)

                    })
                }
            </CardsContainer>
            <ModalBackground
                visible={modalVisible}
                onClick={closeModal}
            >
                <Modal
                    backgroundColor={selectedPokemon?.type[0].type.name}
                >
                    <header>
                        <span>
                            {selectedPokemon?.name}
                        </span>
                        <span>
                            {convertCode(selectedPokemon?.id || 0)}
                        </span>
                    </header>
                    <MiddleModal
                        backgroundColor={selectedPokemon?.type[0].type.name}
                    >
                        {
                            selectedPokemon?.type.map(kind => {
                                return (
                                    <KindPokemon kind={kind.type.name}>
                                        {kind.type.name}
                                    </KindPokemon>
                                )
                            })
                        }
                        <LeftButton backgroundColor={selectedPokemon?.type[0].type.name || ''}>
                            <ArrowBackSharp
                                color={"#FFF"}
                                height="40px"
                                width="40px"
                            />
                        </LeftButton>
                        <img src={takePokemonByCode(selectedPokemon?.id || 0)}
                            alt={"pokemon"}
                        />
                        <RightButton backgroundColor={selectedPokemon?.type[0].type.name || ''} >
                            <ArrowForwardSharp
                                color={"#FFF"}
                                height="40px"
                                width="40px"
                            />
                        </RightButton>
                    </MiddleModal>
                    <FooterModal>

                    </FooterModal>
                </Modal>
            </ModalBackground>
        </Screen>
    )
}