import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Carousel
import Carousel from "../Carousel/Carousel";
import CarouselMobile from "../CarouselMobile/CarouselMobile";

// Styled-Components
import {
  AllDiv,
  Header,
  Circle,
  BaseFlex,
  ButtonCall,
  theme,
  Logo,
  CharizardComponent,
  useStyles,
  DivCard,
  DivCards,
  PCard,
  LastPoke,
  DivBigCards,
  RightBanner,
  GroupCardsBanner,
  PokemonTitle,
  TitleBanner,
  TextBanner,
  ButtonCallBanner,
  Pokebola,
  Pikachu,
  Footer,
  DivFooter,
  EmailP,
  Rights,
  BaseFlexFooter,
  LogoFooter,
  BaseFlexColumn,
  FlexOrganize,
} from "./styles";

// Imgs
import Instagram from "../../imgs/instagram.svg";
import Facebook from "../../imgs/facebook.svg";
import Youtube from "../../imgs/youtube.svg";
import Charizard from "../../imgs/charizardBoladao.png";
import PokebolaImg from "../../imgs/pokebola.png";
import PikachuImg from "../../imgs/pikachu.png";
import Email from "../../imgs/email.svg";
import LogoYooh from "../../imgs/logo.svg";

// Material UI
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

function HomePage() {
  // Estado pro menu dinâmico
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Setando o estado para o array de pokemons.
  const [pokemonList, setPokemonList] = useState([]);

  // Usestyles
  const classes = useStyles();

  // Menu dinâmico
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Cards = styled(Card)`
    margin-right: 1.25rem;
    width: 8rem;
    height: 12rem;

    @media (max-width: 530px) {
      margin-bottom: 2rem;
    }
  `;

  const BigCard = styled(Card)`
    margin: 2rem 1.5rem 1.25rem 0;
    width: 10rem;
    height: 12rem;

    @media (max-width: 530px) {
      display: none;
    }
  `;

  // API

  // Pegando a lista de pokemons.
  const takePokemon = () => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon/?limit=25");

    request
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePokemonData = (poke) => {
    const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    console.log(request);

    request
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const arrayRender = () => {
    pokemonList.forEach((p) => {
      takePokemonData(p.name);
    });
  };

  arrayRender();

  useEffect(() => {
    takePokemon();
  }, []);

  let cont = 0;

  return (
    <AllDiv>
      {/* ThemeProvider pra conseguir aplicar temas no Material-UI */}
      <ThemeProvider theme={theme}>
        {/* Header espaçados com flexbox, tornando mais responsivo. */}
        <Header>
          {/* Div Logo + Menu */}
          <BaseFlex>
            <Button
              variant="contained"
              color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Teste</MenuItem>
            </Menu>
            <Logo>PokemonBlog</Logo>
          </BaseFlex>

          {/* Div Redes + Button */}
          <BaseFlex>
            <ButtonCall>Call to action</ButtonCall>
            <Circle>
              <img src={Instagram} />
            </Circle>
            <Circle>
              <img src={Facebook} />
            </Circle>
            <Circle>
              <img src={Youtube} />
            </Circle>
          </BaseFlex>
        </Header>
        <CharizardComponent src={Charizard} />

        {/* Banner */}
        <Carousel />

        <DivCards>
          <LastPoke>Últimos pokemons</LastPoke>

          {/* Um map para renderizar os cards na tela com as 
          infos da API. Criei um contador pra modificar o link, 
          acho que vai poupar mais linhas de código. Coloquei também pra renderizar acima de 8,
          porque os outros pokemons vou utilizar nos cards grandes. */}

          <DivCard>
            {pokemonList.map((poke) => {
              cont = cont + 1;
              if (
                pokemonList.indexOf(poke) > 15 &&
                pokemonList.indexOf(poke) < 22
              )
                return (
                  <Cards>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont}.png`}
                      />
                      <PCard>{poke.name}</PCard>
                    </CardActionArea>
                  </Cards>
                );
            })}
          </DivCard>
        </DivCards>

        <GroupCardsBanner>
          <DivBigCards>
            {/* Aqui foi feito um switch case com os pokemons específicos,
          puxando o valor da api.*/}

            {pokemonList.map((poke) => {
              switch (pokemonList.indexOf(poke)) {
                case 5:
                  return (
                    <div>
                      <PokemonTitle>Charizard</PokemonTitle>
                      <BigCard>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`}
                          />
                        </CardActionArea>
                      </BigCard>
                    </div>
                  );

                case 24:
                  return (
                    <div>
                      <PokemonTitle>Pikachu</PokemonTitle>
                      <BigCard>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
                          />
                        </CardActionArea>
                      </BigCard>
                    </div>
                  );

                case 1:
                  return (
                    <div>
                      <PokemonTitle>Ivysaur</PokemonTitle>
                      <BigCard>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`}
                          />
                        </CardActionArea>
                      </BigCard>
                    </div>
                  );

                case 0:
                  return (
                    <div>
                      <PokemonTitle>Bulbassaur</PokemonTitle>

                      <BigCard>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                          />
                        </CardActionArea>
                      </BigCard>
                    </div>
                  );
              }
            })}
          </DivBigCards>
          <RightBanner>
            <TitleBanner>Teste frontend</TitleBanner>
            <TextBanner>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
              lacus, aliquam mattis est enim, molestie diam. Consequat blandit
              nec, venenatis dignissim suspendisse in facilisi molestie duis.
              Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi,
              nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales
              sed ullamcorper dapibus accumsan. Faucibus pharetra, et at orci,
              vel blandit odio. Volutpat urna fusce quisque libero pellentesque
              in. Augue tempor vitae ullamcorper bibendum.
              <br />
              <br />
              Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend
              eros ullamcorper et. Diam, ultrices pellentesque urna, integer a
              lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor
              cursus cursus.{" "}
            </TextBanner>
            <ButtonCallBanner>Call to Action</ButtonCallBanner>
          </RightBanner>
        </GroupCardsBanner>

        <Pokebola src={PokebolaImg} />
        <Pikachu src={PikachuImg} />

        {/* Carousel Mobile */}
        <CarouselMobile pokemonList={pokemonList} />

        <Footer>
          <DivFooter>
            <BaseFlex>
              <BaseFlexColumn>
                <FlexOrganize>
                  <img src={Email} />
                  <EmailP>email@testeweb.com</EmailP>
                </FlexOrganize>
                <FlexOrganize>
                  <Circle>
                    <img src={Instagram} />
                  </Circle>
                  <Circle>
                    <img src={Facebook} />
                  </Circle>
                  <Circle>
                    <img src={Youtube} />
                  </Circle>
                </FlexOrganize>
              </BaseFlexColumn>
            </BaseFlex>
          </DivFooter>
          <BaseFlexFooter>
            <LogoFooter>PokemonBlog</LogoFooter>

            <Rights>2020 © Todos os direitos reservados.</Rights>
            <img src={LogoYooh} />
          </BaseFlexFooter>
        </Footer>
      </ThemeProvider>
    </AllDiv>
  );
}

export default HomePage;
