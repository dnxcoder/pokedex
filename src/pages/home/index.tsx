import React, { useState, useEffect, useRef } from 'react';
import Card from '../../components/Card';
import Description from '../../components/Description';

// Styled Components
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
    ButtonToggle,
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
    const [behaviorActive, setBehaviorActive] = useState(true);

    const [flipFooter, setFlipFooter] = useState('');

    const footerRef = useRef(null);

    const [nextPokemonMove, setNextPokemonMove] = useState({ position: "0%", transition: "0s", translate: 'translateY(0%)' });

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

        console.log(selectedPokemon?.id);

        let newPokemonSelected :any = null;
        if ((selectedPokemon?.id || 0) >= pokemonListJson.length) {
            newPokemonSelected = pokemonListJson[0];
        }else{
            
            newPokemonSelected = pokemonListJson[selectedPokemon?.id || 0];
        }



        setNextPokemonMove({ transition: "0.5s ease-in-out", position: "-100%", translate: 'scale(0%)' });


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0s", position: "100%", translate: 'scale(0%)' });
        }, 600);


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0.7s ease-in-out", position: "0%", translate: 'scale(100%)' });
        }, 700);

    }

    function previousPokemon() {

        let previousIndex = ((selectedPokemon?.id || 0) - 2);

        if (previousIndex <= -1) {
            previousIndex = pokemonListJson.length -1;
        }

        const newPokemonSelected = pokemonListJson[previousIndex];

        setNextPokemonMove({ transition: "0.5s ease-in-out", position: "100%", translate: 'scale(0%)' });


        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0s", position: "-100%", translate: 'scale(0%)' });
        }, 600);

        setTimeout(() => {

            setSelectedPokemon(newPokemonSelected);
            setNextPokemonMove({ transition: "0.7s ease-in-out", position: "0%", translate: 'scale(100%)' });
        }, 700);
    }

    async function handleClickBehave() {
        setFlipFooter('rotateY(0deg)');

        setTimeout(() => {
            setBehaviorActive(true);
        }, 200);


    }

    function handleClickDescription() {
        setFlipFooter('rotateY(-180deg) scale(-1, 1)');

        setTimeout(() => {
            setBehaviorActive(false);
        }, 200);

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
                            selectedPokemon?.type.map((kind, index) => {
                                return (
                                    <KindPokemon kind={kind.type.name} index={index}>
                                        {kind.type.name}
                                    </KindPokemon>
                                )
                            })
                        }
                        <PokemonImgStyled
                            pkmnTransition={nextPokemonMove.transition}
                            pkmnImagePosition={nextPokemonMove.position}
                            pkmnTranslate={nextPokemonMove.translate}
                            src={takePokemonByCode(selectedPokemon?.id || 1)}
                        />
                        <LeftButton backgroundColor={selectedPokemon?.type[0].type.name || ''}
                            onClick={previousPokemon}
                        >
                            <ArrowBackSharp
                                color={"#FFF"}
                                height="40px"
                                width="40px"
                            />
                        </LeftButton>
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
                    <FooterModal ref={footerRef} transformFooterModal={flipFooter}>
                        <TitleFooter>
                            <ButtonToggle
                                active={behaviorActive}
                                onClick={handleClickBehave}
                                btnColor={selectedPokemon?.type[0].type.name || ''}
                            >
                                Behavior
                            </ButtonToggle>
                            <ButtonToggle
                                active={!behaviorActive}
                                onClick={handleClickDescription}
                                btnColor={selectedPokemon?.type[0].type.name || ''}
                            >
                                Description
                            </ButtonToggle>
                        </TitleFooter>
                        {behaviorActive ?

                            selectedPokemon?.behavior

                            :

                            <Description
                                id={selectedPokemon?.id || 0}
                                name={selectedPokemon?.name || ''}
                                height={selectedPokemon?.height || 0}
                                weight={selectedPokemon?.weight || 0}
                                experience={selectedPokemon?.experience || 0}
                                behavior={selectedPokemon?.behavior || ''}
                                type={selectedPokemon?.type || []}
                            />
                        }
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