import React from 'react';
import styled from 'styled-components'
import { Hero } from '../components/hero';
import { About } from '../components/about';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`



export default function Home() {
  return (
    <Wrapper>
      <Hero/>
      <About/>
    </Wrapper>
  )
}