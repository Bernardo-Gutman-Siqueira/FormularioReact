import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { Catao } from "../../components/Cartao/cartao";
import { Container,Body, Cont1,Cont11,Cont12,Cont2,Cont21,Cont22 } from "./estiloHome";

export const Inicio = () =>{
  
    return(<>
    <Topo/>
  <Container/>
    <Body>
   <Cont2>
    <Cont21></Cont21>
    <Cont22></Cont22>
   </Cont2>
   <Cont1>
<Cont11><h2>Lógica de programação</h2></Cont11>
<Cont12>
    <Catao/>
</Cont12>
          <Paginacao/>
    </Cont1>
  
    </Body>
 </>);
}