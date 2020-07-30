import React from "react";
import styled from "styled-components";
import { BioText } from "./bio-text";

const Wrapper = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => theme.main} 1px solid;
  padding: 3em 4em;
  position: relative;
  box-sizing: border-box;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BioImage = styled.div``;

export const About = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <BioText></BioText>
        <BioImage></BioImage>
      </SectionWrapper>
    </Wrapper>
  );
};
