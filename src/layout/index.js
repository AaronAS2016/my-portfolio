import React from 'react';
import { GlobalStyle } from "@as/styles";
import { Navbar } from '../components/nav-bar';

export const Layout = (props) => {
    const Children = props.children;
    return(
        <>
            <Navbar/>
            <GlobalStyle />
            { Children } 
        </>
    )
}