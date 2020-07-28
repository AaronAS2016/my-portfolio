import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position:relative;
    height:calc((300px - 10rem)/6 + 1rem);
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
        opacity:0;
        background: ${({theme}) => theme.main};
        box-sizing: border-box;
        transition: opacity .2s linear;
        width: 1.3em;
    }
`
const Input = styled.input`
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:checked + ${Label}::after {
        opacity:1
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

export const ButtonForm = ({ id, text, isSelected, name, isTextVisible, handleClick }) => {

    const [isChecked, setChecked] = useState(isSelected);

    useEffect(() => {
        setChecked(isSelected)
    },[isSelected])

    return(
        <Wrapper>
            <Input 
                type="radio" 
                name={name} 
                id={id} 
                value={name} 
                checked={isChecked} 
                onChange={() => { handleClick(id); setChecked(state => !state )}} 
            />
            
            <Label htmlFor={id} >
                <Span isvisible={isTextVisible}>
                    {text}
                </Span>
            </Label>


        </Wrapper>
    )
}