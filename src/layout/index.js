import React from 'react';
import { GlobalStyle } from "@as/styles";

export const Layout = (props) => {
    const Children = props.children;
    return(
        <>
            <GlobalStyle />
            { Children } 
        </>
    )
}