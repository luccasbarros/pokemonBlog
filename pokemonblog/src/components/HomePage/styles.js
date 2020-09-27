import styled from "styled-components";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  media: {
    height: 160,
  },
});

// Onde os cards menores estão.
export const DivCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  margin-left: 2rem;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    width: 90vw;
  }
`;

// Div flexbox pra centralizar os cartões
export const DivCards = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  flex-direction: column;
  margin-bottom: 3.125rem;
`;

// Engloba os cards maiores
export const DivBigCards = styled.div`
  width: 35vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
`;

// Contém a div dos cards maiores mais o banner lateral
export const GroupCardsBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Banner lateral
export const RightBanner = styled.div`
  width: 32vw;
  height: 75vh;
  background-color: #ffd029;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 425px) {
    display: none;
  }
`;

// Título banner lateral
export const TitleBanner = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ff6b18;
  margin-left: 3rem;
`;

// Texto do banner lateral
export const TextBanner = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  width: 25vw;
  margin-left: 3rem;
  color: #1a1a1a;
`;

// Tipografia no estilo title para os nomes dos pokémons
export const LastPoke = styled.p`
  color: #72808e;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

// Aprovitando o título acima com margin
export const PokemonTitle = styled(LastPoke)`
  margin-left: 0.625rem;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const EmailP = styled(LastPoke)`
  font-size: 1rem;
  margin: 0 0.875rem;
`;

// Nome dos pokemons em laranja
export const PCard = styled.p`
  color: #ff6b18;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  margin: 0 0 5px 35px;
`;

// Header
export const Header = styled.header`
  background-color: white;
  width: 100%;
  height: 5rem;
  display: flex;
  -webkit-box-shadow: -9px 6px 116px -44px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -9px 6px 116px -44px rgba(0, 0, 0, 0.75);
  box-shadow: -9px 6px 116px -44px rgba(0, 0, 0, 0.75);
  justify-content: space-around;
`;

// Div que engloba o conteúdo
export const AllDiv = styled.div`
  background-color: #e5e5e5;
  height: 280vh;
`;

// Div utilizada comumente com flexbox
export const BaseFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BaseFlexFooter = styled(BaseFlex)`
  justify-content: space-between;
  width: 68vw;
`;

// Círculo redes sociais
export const Circle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 2px solid #ffebe0;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-right: 0.625rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;

// Button padrão CallToA
export const ButtonCall = styled.button`
  width: 12.5rem;
  height: 3rem;
  border-radius: 53px;
  border: none;
  background-color: #ff6b18;
  color: white;
  margin: 0.625rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  margin-right: 2rem;
  cursor: pointer;

  @media (max-width: 425px) {
    display: none;
  }
`;

// Aproveitando o mesmo button, mudando apenas a margin /\
export const ButtonCallBanner = styled(ButtonCall)`
  margin-left: 3rem;
`;

// Charizard IMG
export const CharizardComponent = styled.img`
  max-width: 100%;
  position: absolute;
  left: 721px;

  @media (max-width: 425px) {
    display: none;
  }
`;

// Logo Header
export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ff6b18;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 0.875rem;
`;

export const LogoFooter = styled(Logo)`
  font-size: 1.5rem;
  color: #ff6b18;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 0.875rem;

  @media (max-width: 425px) {
    display: none;
  }
`;

// Tema pro button do Material
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

// Pokebola IMG
export const Pokebola = styled.img`
  max-width: 100%;
  position: absolute;
  left: 825px;
  top: 1475px;
  @media (max-width: 425px) {
    display: none;
  }
`;

// Pikachu IMG
export const Pikachu = styled.img`
  max-width: 80%;
  position: absolute;
  left: 1000px;
  top: 1375px;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: white;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(102, 102, 102, 0.3);
  height: 12vh;
  width: 70vw;
`;

export const Rights = styled.p`
  font-size: 0.875;
  font-weight: 400;
  font-family: "Proxima Nova";
  color: #666666;
  margin-right: 2rem;
`;
