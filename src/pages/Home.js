import React from 'react';
import styled from 'styled-components'
import { Hero } from '../components/hero';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  text-transform:uppercase;
`



export default function Home() {
  return (
    <Wrapper>
      <Hero/>
    </Wrapper>
  )
}