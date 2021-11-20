import React, {useEffect} from "react";
import { Header, Contato, Footer } from "../components";
import ProjetosCards from "../components/Projetos";
import * as S from "../styles/Projetos";
import projects from "../APIs/projetos"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projetos = () => {


  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <>
      <Header />
      <S.globalProjetos>
      <S.titleProjetos>PROJETOS</S.titleProjetos>
      <S.scrollProjetos>
        {projects.map(({name, githubUrl, image, description}) =>(
           <ProjetosCards name={name} githubUr={githubUrl} image={image} description={description} />))}
      </S.scrollProjetos>
      </S.globalProjetos>
      <Contato />
      <Footer />
    </>  
  );
};

export default Projetos;
