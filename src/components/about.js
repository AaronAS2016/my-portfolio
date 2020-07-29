import React, {  useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonForm } from './button-form';
import { bioText } from '../config/textBio';


const Wrapper = styled.div`
    width:100%;
    border-bottom: ${({theme}) => theme.main} 1px solid;
    padding: 3em 4em;
    position:relative;
    box-sizing:border-box;

`


const SectionWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`


const BioTextWrapper = styled.div`
    font-family: 'Merriweather', serif;
`

const BioTextForm = styled.form`
    margin: 1em auto 3em;
    max-width:90vw;
    width:300px;
    `
    
    const BioText = styled.div`
    display:flex;
    justify-content:flex-start;
    text-align:left;
    color: ${({theme}) => theme.text}; 
    max-width:90vw;
    font-size:1.2em;



    .bold{
        font-weight:bold;
    }

    a {
        text-decoration: underline;
        color: ${({theme}) => theme.main}
    }

    `
    
    
    const SocialMediaWrapper = styled.div`
    `
    
    
    
    
    const BioImage = styled.div`
    `

    
    /**
     * Form
     */
    
    
    const FormField = styled.fieldset`
    border:none;
    padding:0;
    `;
    
    const Legend = styled.legend`
        color: ${({theme}) => theme.text}; 
        text-transform:uppercase;
        font-size:.75em;
        letter-spacing:.15em;
        margin:2px 0;
    `

    const BioModule = styled.div`
        display:grid;
        grid-template-columns:repeat(6, 1fr);
        align:items:center;
        grid-gap:2em;
        margin:2em 0;
    
    `
    



const bioButtons = [
    {isTextVisible: "true", id: "shortest", name:"lenght"},
    {isTextVisible: "false", id: "shorter", name:"lenght"},
    {isTextVisible: "false", id: "short", name:"lenght"},
    {isTextVisible: "false", id: "long", name:"lenght"},
    {isTextVisible: "false", id: "longer", name:"lenght"},
    {isTextVisible: "true", id: "longest", name:"lenght"}
]

export const About = () => {

    const [actualText, setText] = useState("short");

  
    

    return (
        <Wrapper>
            <SectionWrapper>
                <BioTextWrapper>
                    <BioTextForm>
                        <FormField>
                            <Legend>Adjust bio lenght:</Legend>
                            <BioModule>
                                {
                                    bioButtons.map(({isTextVisible, id, name}) => (
                                        <ButtonForm 
                                            key={id} 
                                            handleClick={ setText }  
                                            isTextVisible={isTextVisible} 
                                            id={id} 
                                            isSelected={actualText === id} 
                                            text={id} 
                                            name={name}/>
                                    ))

                                }
                            </BioModule>
                        </FormField>


                    </BioTextForm>
                    <BioText>{ bioText[actualText] }</BioText>
                    <SocialMediaWrapper></SocialMediaWrapper>

                </BioTextWrapper>
                <BioImage></BioImage>
            </SectionWrapper>
        </Wrapper>
    )
}