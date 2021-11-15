import React from "react";
import { Header, Contato, Footer } from "../components";
import ProjetosCards from "../components/Projetos";
import * as S from "../styles/Projetos";
import projects from "../APIs/projetos"

const Projetos = () => {
  return (
    <>
      <Header />
      <S.globalProjetos>
      <h1>PROJETOS</h1>
        {projects.map(({name, githubUrl, image, description}) =>(
           <ProjetosCards name={name} githubUr={githubUrl} image={image} description={description} />))}
      </S.globalProjetos>
      <Contato />
      <Footer />
    </>  
  );
};

export default Projetos;
