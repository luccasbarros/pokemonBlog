import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import {
  ExtDivCarousel,
  DivItem,
  InsideDiv,
  InsideDivScroll,
  Body,
  useStyles,
  PokemonTitle,
  DivCard,
  ImgCard,
} from "./styles";

function CarouselMobile(props) {
  useEffect(() => {}, []);

  return (
    <Body>
      <ExtDivCarousel>
        <DivItem className="item">
          <InsideDiv>
            {props.pokemonList.map((poke) => {
              switch (props.pokemonList.indexOf(poke)) {
                case 5:
                  return (
                    <DivCard>
                      <PokemonTitle>Charizard</PokemonTitle>
                      <ImgCard
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`}
                      />
                    </DivCard>
                  );
              }
            })}
          </InsideDiv>

          <InsideDiv>
            {props.pokemonList.map((poke) => {
              switch (props.pokemonList.indexOf(poke)) {
                case 24:
                  return (
                    <DivCard>
                      <PokemonTitle>Pikachu</PokemonTitle>
                      <ImgCard
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
                      />
                    </DivCard>
                  );
              }
            })}
          </InsideDiv>

          <InsideDiv>
            {props.pokemonList.map((poke) => {
              switch (props.pokemonList.indexOf(poke)) {
                case 0:
                  return (
                    <DivCard>
                      <PokemonTitle>Bulbassaur</PokemonTitle>
                      <ImgCard
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                      />
                    </DivCard>
                  );
              }
            })}
          </InsideDiv>

          <InsideDiv>
            {props.pokemonList.map((poke) => {
              switch (props.pokemonList.indexOf(poke)) {
                case 1:
                  return (
                    <DivCard>
                      <PokemonTitle>Ivysaur</PokemonTitle>
                      <ImgCard
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`}
                      />
                    </DivCard>
                  );
              }
            })}
          </InsideDiv>
        </DivItem>
      </ExtDivCarousel>
    </Body>
  );
}

export default CarouselMobile;
