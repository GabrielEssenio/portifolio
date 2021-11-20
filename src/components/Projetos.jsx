import React from "react";
import * as S from "../styles/Projetos";

const ProjetosCards = ({ name, githubUrl, image, description }) => {
  // function gerar_cor_hexadecimal()
  // {
  //   return '#' + parseInt((Math.random() * 0xFFFFFF))
  //     .toString(16)
  //     .padStart(6, '0');
  // }
  
  return (
      <S.mainProjetos>
      <S.cardDiv  data-aos="zoom-in-up">
        <div>
          <S.titleProject>{name}</S.titleProject>
        </div>
        <S.eachProject>
          <S.a href={githubUrl}>
            <S.imgProjetos src={image} alt={name} width="300px" />
          </S.a>
          <S.textProjeto>{description}</S.textProjeto>
        </S.eachProject>
      </S.cardDiv>
      </S.mainProjetos>
  );
};

export default ProjetosCards;
