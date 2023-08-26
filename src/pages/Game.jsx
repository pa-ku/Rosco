import React from 'react'
import styled from "styled-components";
import Table from '../components/Table';
import MainButton from '../components/MainButton';
import MainTitle from '../components/MainTitle';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const ButtonCtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2em;
margin-block:2em;
`


export default function Game() {
  return (
    <>

    <MainTitle text={"ROSQUEWE"} />

<ButtonCtn>
<Link to={"/"}>
<MainButton text={"Home"} altLogo={<HomeIcon></HomeIcon>}/>



</Link>
<MainButton logo={true} text="Roll" onClick={() => window.location.reload()} />
</ButtonCtn>


<Table />
    

    </>

  )
}
