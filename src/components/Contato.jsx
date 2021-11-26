import React from "react";
import * as S from "../styles/ContatoStyle.js";
import { contatos } from "../APIs/contatos";
import CardContatos from "./CardContatos";
const Contato = () => {
  return (
    <S.mainContentContato>
      <S.titleContatos>MEUS CONTATOS</S.titleContatos>
      <S.contentDiv>
        <S.subDiv>
        {contatos.map((contato) => (
          <CardContatos allContatos={contato} />
        ))}
        </S.subDiv>
      </S.contentDiv>
    </S.mainContentContato>
  );
};

export default Contato;
