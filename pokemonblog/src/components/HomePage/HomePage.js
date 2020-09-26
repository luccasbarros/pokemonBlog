import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Carousel
import Carousel from "../Carousel/Carousel";

// Styled-Components
import {
  AllDiv,
  Header,
  Circle,
  DivHeader,
  ButtonCall,
  theme,
  Logo,
  CharizardComponent,
  useStyles,
  DivCard,
  DivCards,
  PCard,
  LastPoke,
} from "./styles";

// Imgs
import Instagram from "../../imgs/instagram.svg";
import Facebook from "../../imgs/facebook.svg";
import Youtube from "../../imgs/youtube.svg";
import Charizard from "../../imgs/charizardBoladao.png";

// Material UI
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

function HomePage() {
  // Estado pro menu dinâmico
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonImg, setPokemonImg] = useState("");

  const arrayPokemons = [];

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
    margin-right: 20px;
    width: 8rem;
    height: 12rem;
  `;

  // API

  const takePokemon = () => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15");

    request
      .then((response) => {
        setPokemonList(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const laçoTeste = arrayPokemons.forEach((poke) => {
    return console.log(poke);
  });

  const takePokemonData = (poke) => {
    const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    console.log(request);

    request
      .then((response) => {
        arrayPokemons.push(response.data.sprites.front_default);
      })
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

  return (
    <AllDiv>
      {/* ThemeProvider pra conseguir aplicar temas no Material-UI */}
      <ThemeProvider theme={theme}>
        {/* Header espaçados com flexbox, tornando mais responsivo. */}
        <Header>
          {/* Div Logo + Menu */}
          <DivHeader>
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
          </DivHeader>

          {/* Div Redes + Button */}
          <DivHeader>
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
          </DivHeader>
        </Header>
        <CharizardComponent src={Charizard} />
        {/* Banner */}
        <Carousel />

        <DivCards>
          <LastPoke>Últimos pokemons</LastPoke>

          <DivCard>
            {pokemonList.map((poke) => {
              if (pokemonList.indexOf(poke) > 8)
                return (
                  <Cards>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                      />
                      <PCard>{poke.name}</PCard>
                    </CardActionArea>
                  </Cards>
                );
            })}
          </DivCard>
        </DivCards>
        {laçoTeste}
      </ThemeProvider>
    </AllDiv>
  );
}

export default HomePage;
