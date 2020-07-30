import React, { useState } from "react";
import styled from "styled-components";
import { ButtonForm } from "./button-form";
import { bioText } from "../config/textBio";
import { bioButtons } from "../config/bioButtons";
import  LinkedinLogo from '../assets/linkedin.svg';


const BioTextWrapper = styled.div`
  font-family: "Merriweather", serif;
`;

const BioTextForm = styled.form`
  margin: 1em auto 3em;
  max-width: 90vw;
  width: 300px;
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: ${({ theme }) => theme.text};
  max-width: 90vw;
  font-size: 1.2em;

  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.main};
  }
`;

const SocialMediaWrapper = styled.div``;

/**
 * Form
 */

const FormField = styled.fieldset`
  border: none;
  padding: 0;
`;

const Legend = styled.legend`
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 0.15em;
  margin: 2px 0;
`;

const BioModule = styled.div`
        display:grid;
        grid-template-columns:repeat(6, 1fr);
        align:items:center;
        grid-gap:2em;
        margin:2em 0;
    
    `;

export const BioText = () => {
  const [actualText, setText] = useState("short");
  return (
    <BioTextWrapper>
      <BioTextForm>
        <FormField>
          <Legend>Adjust bio lenght:</Legend>
          <BioModule>
            {bioButtons.map(({ isTextVisible, id, name }) => (
              <ButtonForm
                key={id}
                handleClick={setText}
                isTextVisible={isTextVisible}
                id={id}
                isSelected={actualText === id}
                text={id}
                name={name}
              />
            ))}
          </BioModule>
        </FormField>
      </BioTextForm>
      <Text>{bioText[actualText]}</Text>
      <SocialMediaWrapper>
          <LinkedinLogo></LinkedinLogo>
      </SocialMediaWrapper>
    </BioTextWrapper>
  );
};
