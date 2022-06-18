import React from 'react'
import { Form } from 'react-bootstrap'
export default function Formulario() {
  return (

    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control name="name" placeholder='Digite seu nome'/>
      </Form.Group>
      <br/>
      <Form.Group controlId='formEmail'>
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type='email' placeholder='exemplo@gmail.com'/>
      </Form.Group>
      <br/>
      <Form.Group controlId='formPassword'>
        <Form.Label>Senha</Form.Label>
        <Form.Control type='password' placeholder='Senha'/>
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Label>Mensagem</Form.Label>
         <Form.Control name='bio' placeholder='Digite aqui' as='textarea'/>  
        </Form.Group>
    </Form>

  )
}
