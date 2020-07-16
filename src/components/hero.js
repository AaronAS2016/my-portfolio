import React from 'react';
import styled from 'styled-components';

const SecundaryText = styled.p`
  background: ${({ theme }) => theme.dark.colors.primary};
  color: ${({ theme }) => theme.dark.colors.secundary};
  font-size:3.5em;
  margin:0;
`

const TextWrapper = styled.div`
  font-size:3em;
  @media (prefers-color-scheme: dark) { 
    color: ${({ theme }) => theme.dark.colors.text};
  }
  
  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.light.colors.text};
  }
`;


const FirstText = styled.span`
  font-size:4em;
  color: ${({  theme }) => theme.dark.colors.primary};
`;

const Paraghaph = styled.p`
  color: ${({theme}) => theme.dark.colors.primary};

`

export const Hero = () => {
    return(
      <TextWrapper>
        <FirstText> Aaron  </FirstText>  <br/>

        <SecundaryText> Saban </SecundaryText>

        <Paraghaph>Its Dev Web UI</Paraghaph>
      </TextWrapper>
    )
}