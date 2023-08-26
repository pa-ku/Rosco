import React from 'react'
import { words } from "../words";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

//crear una tabla con todas las palabras, e informacion de cada palabra,
//cantidad de palabras
//palabras repetidas
//numero de palabras con cada letra
//pushear palabras al local storage para luego subirlas
//marcar palabras en el local storage para eliminar posteriormente

export default function WordList() {
  return (
<>
<HomeButton />
<h1>Lista en progreso</h1>
</>
  )
}
