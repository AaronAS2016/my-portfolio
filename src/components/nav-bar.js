
import React from 'react';
import styled from 'styled-components';

const LogoName = styled.a`
    line-height:1.45;
    color: ${({theme}) => theme.text};
    cursor:pointer;
`

const NavWrapper = styled.div`
    position:sticky;
    top:0;
    z-index:10;
    padding: 1em 2em;

    &:after{
        background-image: ${({theme}) => theme.gradient};
        content: "";
        display: block;
        height: 4px;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
    }
`


export const Navbar = () => {
    return (
        <NavWrapper>
           <LogoName href="#">Aaron Saban </LogoName> 
        </NavWrapper>
    )
}