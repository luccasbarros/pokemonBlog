import React, { useEffect } from "react";

import {
  ExtDivCarousel,
  DivItem,
  InsideDiv,
  Body,
  RightBanner,
  PokemonTitle,
  DivCard,
  ImgCard,
  TitleBanner,
  TextBanner,
  ButtonCall,
} from "./styles";

function CarouselMobile(props) {
  const tamanhoTela = window.innerWidth;

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

      <RightBanner>
        <TitleBanner>Teste frontend</TitleBanner>
        <TextBanner>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
          lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec,
          venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed
          quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam
          ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper
          dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio.
          Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae
          ullamcorper bibendum.
          <br />
          <br />
          Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend
          eros ullamcorper et. Diam, ultrices pellentesque urna, integer a
          lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor
          cursus cursus.
        </TextBanner>
        <ButtonCall>Call to Action</ButtonCall>
      </RightBanner>
    </Body>
  );
}

export default CarouselMobile;
