import React from "react";
import styled from "@emotion/styled";

import { Article } from "@components/Article";

const Title = styled.h1``;

function About() {
  return (
    <Article>
      <Title>About Me</Title>
      <p>Follow for technical articles</p>
    </Article>
  );
}

export default About;
