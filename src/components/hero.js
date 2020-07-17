import React from 'react';
import styled from 'styled-components';

const SecundaryText = styled.p`
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.body};
  font-size:3.5em;
  margin:0;
`

const Wrapper = styled.div`
  width:100%;
  height:40vh;
  border-bottom:1px solid ${({theme} ) => theme.main};
  min-height:400px;
  display:flex;
  justify-content:center;
`;

const TextWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
`;


const FirstText = styled.span`
  font-size:5em;
  color: ${({  theme }) => theme.main};
`;

const Paraghaph = styled.p`
  color: ${({theme}) => theme.main};

`

export const Hero = () => {
    return(
      <Wrapper>
        <TextWrapper>
          <FirstText> Aaron  </FirstText>  <br/>

          <SecundaryText> Saban </SecundaryText>

          <Paraghaph>Its Dev Web UI</Paraghaph>
        </TextWrapper>
      </Wrapper>
    )
}