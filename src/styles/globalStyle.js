import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: dark) { 
    body {
        background: ${({ theme }) => theme.dark.colors.secundary};
    }
  }
  
  @media (prefers-color-scheme: light) {
    background: ${({ theme }) => theme.light.colors.secundary};
  }

  body{
    margin:0;
    padding:0;
    font-family: 'Oswald', sans-serif;
    color: ${({theme}) => theme.dark.colors.primary};
  }

  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    
    /* Browsers have different default form fonts */
    font-size:13px;
    font-family:Arial;
  }

  /* do not add bullets, margin or padding in lists */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus
  {
    outline:0;
  }

  /** remove arrows in input number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


`
