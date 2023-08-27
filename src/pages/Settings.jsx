import React from 'react'
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
gap: 1em;
`

const OptionCtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
`

const Label = styled.label`
cursor: pointer;
text-transform: uppercase;
`
const Checkbox = styled.input`
cursor: pointer;
`


export default function Settings() {

  return (
    <>
<Wrapper>
  <HomeButton />
<OptionCtn>
    <Checkbox checked="cheked" id='Option1'  type="checkbox"  />
    <Label htmlFor="Option1">Palabras que contengan la letra</Label>
</OptionCtn>
</Wrapper>

    </>
  )
}
