import React from "react";
import styled from "styled-components";

import Keon1 from "../../images/Keon1.jpg"; 

export default function HeroBackground() {
  return (
    <Wrapper>
      <Keon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 65%;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1000px) {
    background-size: 1000px;
  }
`;

const Keon = styled(Wave)`
  top: 0px;
  height: 100%;
  background-image: url(${Keon1});
  opacity: .9;
`;

