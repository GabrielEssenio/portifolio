import React from "react";
import * as S from "../styles/Projetos";

const ProjetosCards = ({ name, githubUrl, image, description }) => {

  return (
      <S.mainProjetos>
      <S.cardDiv  data-aos="zoom-in-up">
        <div>
          <S.titleProject>{name}</S.titleProject>
        </div>
        <S.eachProject>
          <S.divImage>
            <S.imgProjetos src={image} alt={name} width="300px" />
          </S.divImage>
          <S.divText>

          <S.textProjeto>{description}</S.textProjeto>
          </S.divText>
          
          <S.buttonProject>
            <S.a href={githubUrl}>Visualizar Projeto</S.a>
          </S.buttonProject>
        </S.eachProject>
      </S.cardDiv>
      </S.mainProjetos>
  );
};

export default ProjetosCards;
