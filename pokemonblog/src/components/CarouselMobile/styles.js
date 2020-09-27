import styled from "styled-components";

export const ExtDivCarousel = styled.div`
  @media (max-width: 475px) {
    width: 100vw;
  }
`;

export const DivItem = styled.div`
  @media (max-width: 475px) {
    height: auto;
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
  @media (max-width: 475px) {
    flex: none;
    width: 100%;
    scroll-snap-align: start;
    pointer-events: none;
  }
`;

export const DivCard = styled.div`
  @media (max-width: 475px) {
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
  @media (max-width: 475px) {
    width: 100%;
  }
`;

export const InsideDivScroll = styled.div`
  @media (max-width: 475px) {
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
  @media (max-width: 475px) {
    margin-top: 0;
    display: grid;
    justify-items: center;
    margin-top: 1.875rem;
    height: auto;
  }
`;

export const PokemonTitle = styled.p`
  @media (max-width: 475px) {
    color: #72808e;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
