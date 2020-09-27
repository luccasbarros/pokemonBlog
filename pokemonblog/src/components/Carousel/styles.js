import styled from "styled-components";

export const ExtDivCarousel = styled.div`
  width: 70vw;

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const DivItem = styled.div`
  display: flex;
  overflow-x: auto;
  height: 60vh;
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

  @media (max-width: 425px) {
    height: 70vh;
  }
`;

export const MediumTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
`;

export const BigTitle = styled.h1`
  color: white;
  font-size: 3rem;
  line-height: 0.1rem;

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  width: 18rem;
  color: white;
  margin-top: 3rem;

  @media (max-width: 425px) {
    width: 10rem;
  }
`;

export const InsideDiv = styled.div`
  flex: none;
  background-color: #f3be00;
  width: 100%;
  scroll-snap-align: start;
  pointer-events: none;
  padding-left: 6rem;
  padding-top: 4rem;

  @media (max-width: 425px) {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;

export const InsideDivScroll = styled.div`
  flex: none;
  background-color: #00a8d2;
  width: 100%;
  scroll-snap-align: start;
  pointer-events: none;
  padding-left: 6rem;
  padding-top: 4rem;

  @media (max-width: 425px) {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;

export const Body = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 1.875rem;
  height: auto;

  @media (max-width: 425px) {
    margin-top: 0;
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

  @media (max-width: 425px) {
    margin-right: 2rem;
    margin-top: 2rem;
    font-size: 0.875rem;
    width: 8rem;
  }
`;

export const CharizardImg = styled.img`
  @media (min-width: 600px) {
    display: none;
  }
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const DivContent = styled.div`
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivContentAll = styled.div`
  @media (max-width: 425px) {
    display: flex;
  }
`;
