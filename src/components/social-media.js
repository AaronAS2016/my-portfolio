import React from 'react';
import styled from 'styled-components';
import LinkedinLogo from '../assets/linkedin.svg';
import GitHubLogo from '../assets/github.svg';
import TwitterLogo from '../assets/twitter.svg';

const SocialMediaWrapper = styled.div``;

const Title = styled.h3`
    font-size:1.2em;
    color: ${({theme}) => theme.main};
    text-align:center;
    font-weight:bold;
    text-transform:uppercase;
    text-separation:1.2;
`

const SocialMediaIconsWrapper = styled.div`
    display:flex;
    justify-content:center;
`

const IconWrapper = styled.a`
    display: block;
    height: 60px;
    padding: 1.125rem;
    transition: all .2s linear;
    transition-delay: .15s;

    margin:1em;
    box-sizing:border-box;

    svg{
        cursor:pointer;
        fill: #fff;
        width:100%;
    }

`


export const SocialMedia = () => {
    return(
        <SocialMediaWrapper>
            <Title>
                Connect with me!
            </Title>
            <SocialMediaIconsWrapper>
                <IconWrapper href="http://linkedin.com/in/aaronsaban" target="_blank">
                    <LinkedinLogo/>
                </IconWrapper>
                <IconWrapper href="https://github.com/AaronAS2016" target="_blank">
                    <GitHubLogo/>
                </IconWrapper>
                <IconWrapper href="https://twitter.com/aaronsaban98" target="_blank">
                    <TwitterLogo/>
                </IconWrapper>
            </SocialMediaIconsWrapper>
        </SocialMediaWrapper>
    )
}