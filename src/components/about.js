import React, {  useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonForm } from './button-form';


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

`

const BioTextForm = styled.form`
    margin: 1em auto 3em;
    max-widht:90vw;
    width:300px;
`

const BioText = styled.p`
    color: ${({theme}) => theme.text}; 
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
    


const bioText = {
    short: "My bio short",
    shorter: "My bio shorter",
    shortest: "My bio shortest",
    long:"My bio long",
    longer:"My bio longer",
    longest:"My bio longest"
}    

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
                                <ButtonForm handleClick={ setText }  isVisible={"true"} id="shortest" isSelected={false} text={"shortest"} name="lenght"/>
                                <ButtonForm handleClick={ setText }  isVisible={"false"} id="shorter" isSelected={false} text={"shorter"} name="lenght"/>
                                <ButtonForm handleClick={ setText }  isVisible={"false"} id="short" isSelected={false} text={"short"} name="lenght"/>
                                <ButtonForm handleClick={ setText }  isVisible={"false"} id="long" isSelected={false} text={"long"} name="lenght"/>
                                <ButtonForm handleClick={ setText }  isVisible={"false"} id="longer" isSelected={false} text={"longer"} name="lenght"/>
                                <ButtonForm handleClick={ setText }  isVisible={"true"} id="longest" isSelected={false} text={"longest"} name="lenght"/>
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