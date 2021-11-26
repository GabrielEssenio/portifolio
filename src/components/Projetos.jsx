import React from "react";
import * as S from "../styles/Projetos";

const ProjetosCards = ({ name, urlProjeto, image, description }) => {
console.log(urlProjeto);
  return (
      <S.mainProjetos>
      <S.cardDiv  data-aos="zoom-in-up">
        <div>
          <S.titleProject>{name}</S.titleProject>
        </div>
        <S.eachProject>
          
          <S.a href={urlProjeto}>
            <S.imgProjetos src={image} alt={name} width="300px" />
          <S.textProjeto>{description}</S.textProjeto>
          </S.a>
        </S.eachProject>
      </S.cardDiv>
      </S.mainProjetos>
  );
};

export default ProjetosCards;
