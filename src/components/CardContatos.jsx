import React from "react";
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router'
import * as S from "../styles/ContatoStyle";
const CardContatos = ({ allContatos }) => {
  const { image, name, url } = allContatos;
  return (
    <S.eachContato>
      <a href={url} target="_blank" rel="noreferrer" > 
        <S.imgContato src={image} alt={name} />
      </a>
    </S.eachContato>
  );
};
export default CardContatos;
