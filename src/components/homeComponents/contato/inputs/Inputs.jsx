import React from "react";
import { Input, TextArea, SubmitBtn } from "./InputStyle";

export function InputText() {
  return <Input type="text" name="nome" placeholder="Nome" />;
}

export function InputEmail() {
  return <Input type="email" name="email" placeholder="E-mail" />;
}

export function InputTel() {
  return <Input type="tel" name="telefone" placeholder="Telefone" />;
}

export function InputMensagem() {
  return (
    <TextArea
      name="message"
      cols="30"
      rows="10"
      
    ></TextArea>
  );
}

export function InputSubmit() {
  return <SubmitBtn type="submit" value="Enviar" />;
}
