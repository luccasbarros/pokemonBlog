import React from "react";

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

function HomePage() {
  // Estado pro menu dinâmico
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Menu dinâmico
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Teste</MenuItem>
              </Menu>
            </Button>
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
      </ThemeProvider>
    </AllDiv>
  );
}

export default HomePage;
