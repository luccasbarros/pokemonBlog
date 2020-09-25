import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

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

export const AllDiv = styled.div`
  background-color: #e5e5e5;
  height: auto;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

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
`;

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
`;

export const CharizardComponent = styled.img`
  max-width: 100%;
  position: absolute;
  left: 721px;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ff6b18;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 0.875rem;
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});
