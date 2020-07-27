import React from 'react';
import styled, { css } from 'styled-components';


const Wrapper = styled.div`
    position:relative;
    height:calc((300px - 10rem)/6 + 1rem);

`


const Input = styled.input`



`


const Label = styled.label`
    position:absolute;
    left:0;
    clip:auto;
    top:80%;

`


const Span = styled.span`

    color:${({theme}) => theme.main };

${props =>
    props.isvisible === "true"
      ? `
          display: block;
        `
      : `
          display:none;
        `
};

`


export const ButtonForm = ({ id, text, isSelected, name, isVisible, handleClick }) => {
    return(
        <Wrapper>
            <Input type="radio" name={name} id={id} value={name} onClick={() => handleClick(id)}  checked={isSelected} />
            
            <Label htmlFor={id} >
                <Span isvisible={isVisible}>
                    {text}
                </Span>
            </Label>


        </Wrapper>
    )
}