import React from 'react';
import styled, { css } from 'styled-components';


const Wrapper = styled.div`
    position:relative;
    height:calc((300px - 10rem)/6 + 1rem);

`
const Input = styled.input`
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
`


const Label = styled.label`
    clip:auto;
    cursor: pointer;
    font-size: .75rem;

    &:before{
        border-radius: 50%;
        content: "";
        display: block;
        height: 0;
        top:0;
        left:0;
        border: 1px solid ${({theme}) => theme.main};
        transition: background .2s linear;
        z-index: 10;
        padding-bottom: calc(1.3em - 2px);
        position: absolute;
        width: 1.3em;
        box-sizing: border-box;
        border-color: ${({theme}) => theme.main};
    }




    &:after{
        border-radius: 50%;
        content: "";
        display: block;
        height: 0;
        padding-bottom: calc(1.3em - 2px);
        position: absolute;
        width: 1em;
        background: ${({theme}) => theme.main};
        box-sizing: border-box;
        transition: opacity .2s linear;
        width: 1.3em;
    }




`


const Span = styled.span`
    left: 0;
    text-align: left;
    clip: auto;
    height: auto;
    overflow: visible;
    width: 60px;
    color:${({theme}) => theme.main };
    font-weight: 200;
    letter-spacing: .2em;
    position: absolute;
    top: 80%;
    white-space: nowrap;

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
            <Input type="radio" name={name} id={id} value={name} onClick={() => handleClick(id)} checked={isSelected} />
            
            <Label htmlFor={id} >
                <Span isvisible={isVisible}>
                    {text}
                </Span>
            </Label>


        </Wrapper>
    )
}