import React, { useEffect } from "react";
import Charizard from "../../imgs/charizardBoladao.png";
import {
  ExtDivCarousel,
  DivItem,
  MediumTitle,
  BigTitle,
  InsideDiv,
  InsideDivScroll,
  Body,
  Paragraph,
  ButtonCall,
  CharizardImg,
  DivContent,
  DivContentAll,
} from "./styles";

function Carousel() {
  useEffect(() => {
    let count = 0;
    setInterval(function () {
      count += 400;
      if (count > 1000) count = 0;
      document.querySelector(".item").scrollTo(count, 0);
      console.log("moveu");
    }, 1500);
  }, []);

  return (
    <Body>
      <ExtDivCarousel>
        <DivItem className="item">
          <InsideDiv>
            <DivContentAll>
              <DivContent>
                <MediumTitle>Faça seu teste</MediumTitle>
                <BigTitle>De frontend</BigTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  euismod at egestas sapien porttitor dui.
                </Paragraph>
                <ButtonCall>Call to Action</ButtonCall>
              </DivContent>
              <CharizardImg src={Charizard} />
            </DivContentAll>
          </InsideDiv>
          <InsideDivScroll>
            <DivContentAll>
              <DivContent>
                <MediumTitle>Faça seu teste</MediumTitle>
                <BigTitle>De frontend</BigTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  euismod at egestas sapien porttitor dui.
                </Paragraph>
                <ButtonCall>Call to Action</ButtonCall>
              </DivContent>
              <CharizardImg src={Charizard} />
            </DivContentAll>
          </InsideDivScroll>
        </DivItem>
      </ExtDivCarousel>
    </Body>
  );
}

export default Carousel;
