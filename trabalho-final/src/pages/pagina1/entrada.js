import React from "react";
import logoFundo from "../../img/logoFundo.png"
import {Imagem}  from "./style.js";
import {Header, Form, Body, Foto } from "./style.js";

export const Registro =()=>{

    return(
        <>
        
          <Body>
             <Header/>
             <Foto><Imagem src={logoFundo}/></Foto>
             <Form/>

           </Body>
       

        </>


    )
}