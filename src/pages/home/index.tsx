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
    RightButton,
    ButtonCloseModal,
    PokemonImgStyled,
    PokeballBackGround,
    TitleFooter,
    ButtonToggle
} from './styles';
import pokemonListJson from '../../Json/pokemonsList.json';
import pokeballLogo from '../../assets/pokeball-logoBG.png'

import { iPokemon } from '../../interfaces';
import { convertCode } from '../../functions/convertCode';
import { ArrowBackSharp, ArrowForwardSharp, CloseOutline } from 'react-ionicons'
import { takePokemonByCode } from '../../functions/takePokemonByCode';

export default function Home() {

    const [pokemonList, setPokemonList] = useState<Array<iPokemon>>([]);
    const [modalVisible, setModalVisible] = useState('none');
    const [selectedPokemon, setSelectedPokemon] = useState<iPokemon>();
    const [moveModal, setMoveModal] = useState("100%");
    //const [activeToggleButton, setActiveToggleButton] = useState('description');

    const [nextPokemonMove, setNextPokemonMove] = useState({ position: "0%", transition: "0s", height: 'auto' });

    useEffect(() => {

        async function autoLoadPokemons() {

            setPokemonList(pokemonListJson);

        }

        autoLoadPokemons();
    }, []);

    function openModal(props: iPokemon) {


        setSelectedPokemon({ ...props });
        setMoveModal("0%");
        setModalVisible('flex');

    }

    function closeModal() {


        setModalVisible('none');
        setMoveModal("100%");
    }

    function stopPropagation(event: MouseEvent) {

        event.stopPropagation();
    }

    function nextPokemon() {

        const newPokemonSelected = pokemonListJson[selectedPokemon?.id || 0];


        setNextPokemonMove({ transition: "0.5s ease-in-out", position: "-100%", height: '0%' });


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0s", position: "100%", height: '0%' });
        }, 600);


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0.7s ease-in-out", position: "0%", height: '100%' });
        }, 700);

    }

    function previousPokemon() {

        const previousIndex = ((selectedPokemon?.id || 0) - 2);

        const newPokemonSelected = pokemonListJson[previousIndex];

        setNextPokemonMove({ transition: "0.5s ease-in-out", position: "100%", height: '0%' });


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0s", position: "-100%", height: '0%' });
        }, 600);

        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0.7s ease-in-out", position: "0%", height: '100%' });
        }, 700);
    }

    return (
        <Screen>
            <Header>
                <span>Welcome to Pokedex Online</span>
            </Header>
            <CardsContainer>
                {
                    pokemonList.map((pokemon, index) => {

                        return (
                            <Card
                                key={index}
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
                modalPosition={moveModal}
            >
                <Modal
                    onClick={stopPropagation}
                    backgroundColor={selectedPokemon?.type[0].type.name}
                >
                    <PokeballBackGround src={pokeballLogo} />
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
                        <LeftButton backgroundColor={selectedPokemon?.type[0].type.name || ''}
                            onClick={previousPokemon}
                        >
                            <ArrowBackSharp
                                color={"#FFF"}
                                height="40px"
                                width="40px"
                            />
                        </LeftButton>
                        <PokemonImgStyled
                            pkmnTransition={nextPokemonMove.transition}
                            pkmnImagePosition={nextPokemonMove.position}
                            pkmnImageHeight={nextPokemonMove.height}
                            src={takePokemonByCode(selectedPokemon?.id || 1)}
                        />
                        <RightButton backgroundColor={selectedPokemon?.type[0].type.name || ''}
                            onClick={nextPokemon}
                        >
                            <ArrowForwardSharp
                                color={"#FFF"}
                                height="40px"
                                width="40px"
                            />
                        </RightButton>
                    </MiddleModal>
                    <FooterModal>
                        <TitleFooter>
                            <ButtonToggle>
                                Description
                            </ButtonToggle>
                            <ButtonToggle>
                                Evolution
                            </ButtonToggle>
                        </TitleFooter>
                        {selectedPokemon?.behavior}
                    </FooterModal>

                </Modal>
                <ButtonCloseModal
                    onClick={closeModal}>
                    <CloseOutline
                        color="#FFF"
                        height="40px"
                        width="40px"
                    />
                </ButtonCloseModal>
            </ModalBackground>
        </Screen>
    )
}