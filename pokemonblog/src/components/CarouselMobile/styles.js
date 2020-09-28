import styled from "styled-components";

// Mesma estrutura do Carrosel principal
export const ExtDivCarousel = styled.div`
  @media (max-width: 530px) {
    width: 100vw;
    margin-bottom: 3rem;
  }
`;

export const DivItem = styled.div`
  @media (max-width: 530px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    --webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    ::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    ::-webkit-scrollbar {
      width: 4px;
      background: #f4f4f4;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
    }
  }
`;

export const InsideDiv = styled.div`
  @media (max-width: 530px) {
    flex: none;
    width: 100%;
    scroll-snap-align: start;
    pointer-events: none;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const DivCard = styled.div`
  @media (max-width: 530px) {
    height: 50vh;
    width: 80vw;
    background-color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 9px 9px 7px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 9px 9px 7px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 9px 9px 7px -9px rgba(0, 0, 0, 0.75);
    flex-direction: column;
    margin-left: 3rem;
    margin-bottom: 2rem;
  }
`;

export const ImgCard = styled.img`
  @media (max-width: 530px) {
    width: 80%;
  }
`;

export const InsideDivScroll = styled.div`
  @media (max-width: 530px) {
    flex: none;
    background-color: #00a8d2;
    width: 100%;
    scroll-snap-align: start;
    pointer-events: none;
    padding-left: 6rem;
    padding-top: 4rem;
  }
`;

export const Body = styled.div`
  @media (max-width: 530px) {
    margin-top: 1.875rem;
  }
`;

export const PokemonTitle = styled.p`
  @media (max-width: 530px) {
    color: #72808e;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const RightBanner = styled.div`
  @media (max-width: 530px) {
    width: 100%;
    height: auto;
    background-color: #ffd029;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleBanner = styled.p`
  @media (max-width: 530px) {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #ff6b18;
    margin-left: 3rem;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

export const TextBanner = styled.p`
  @media (max-width: 530px) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    width: 55vw;
    margin-left: 3rem;
    color: #1a1a1a;
  }
  @media (min-width: 600px) {
    display: none;
  }
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
  cursor: pointer;
  margin-left: 3rem;
  margin-bottom: 3rem;
  @media (min-width: 600px) {
    display: none;
  }
`;
