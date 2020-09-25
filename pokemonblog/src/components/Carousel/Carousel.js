import React, { useEffect } from "react";
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
} from "./styles";

function Carousel() {
  useEffect(() => {
    // document.querySelector(".item").addEventListener("wheel", (event) => {
    //   if (event.deltaY > 0) {
    //     event.target.scrollBy(300, 0);
    //   } else {
    //     event.target.scrollBy(-300, 0);
    //   }
    // });
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
            <MediumTitle>Faça seu teste</MediumTitle>
            <BigTitle>De frontend</BigTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              euismod at egestas sapien porttitor dui.
            </Paragraph>
            <ButtonCall>Call to Action</ButtonCall>
          </InsideDiv>
          <InsideDivScroll>
            <MediumTitle>Faça seu teste</MediumTitle>
            <BigTitle>De frontend</BigTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              euismod at egestas sapien porttitor dui.
            </Paragraph>
            <ButtonCall>Call to Action</ButtonCall>
          </InsideDivScroll>
        </DivItem>
      </ExtDivCarousel>
    </Body>
  );
}

export default Carousel;
