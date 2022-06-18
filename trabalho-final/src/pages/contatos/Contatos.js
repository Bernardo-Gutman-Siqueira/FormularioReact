import React from 'react'
import {Topo} from '../../components/headerHome/header'
import { Container, Contatocon } from './style'
import Formulario from '../../components/formulario/Formulario'
import './contatos.css'
import { Button } from 'react-bootstrap'
export default function Contatos() {
  return (
    <body>
        <Topo/>
        <div className='greybar'/>
      <Container/>
      <Contatocon><h1 className='textbigform'>Entre em contato com a gente</h1></Contatocon>
      <Contatocon/>
      <div className='keepkeepform'>
        <div className='keepform'>
        <Formulario/>
        <Container/>
        <Button>Enviar</Button>
      </div>
      </div>
      <Container/>
      <Container/>
      <Container/>
      
        


    </body>
  )
}

