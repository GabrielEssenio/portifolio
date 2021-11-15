import React from "react";
import { Header, Contato, Footer } from "../components";
import * as S from "../styles/Projetos";

import projects from "../APIs/projetos";

const Projetos = () => {
  return (
    <S.globalProjetos>
      <Header />
      <h1>PROJETOS</h1>
      <S.mainProjetos>
        {projects.map(({ name, image, description, githubUrl }) => (
          <S.cardDiv>
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
        ))}
      </S.mainProjetos>

      <Contato />
      <Footer />
    </S.globalProjetos>
  );
};

export default Projetos;
