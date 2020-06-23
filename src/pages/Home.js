import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {
  return (
    <Wrapper>
        <Title>My page</Title>
    </Wrapper>
  )
}