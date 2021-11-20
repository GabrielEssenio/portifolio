import React, {useEffect} from "react";
import { Header, Contato, Footer } from "../components";
import * as S from "../styles/Habilidades";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CardsHabilidades } from "../components/CardsHabilidades";

import {
  skillFront,
  skillBack,
  skillLanguage,
  skillFerramenta,
} from "../APIs/habilidades";

const Habilidades = () => {

  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  return (
    <>
      <Header />
      <S.contentHabilidades data-aos="zoom-in-up">
        <CardsHabilidades
          title="Front-End"
          skills={skillFront}
        />
        <CardsHabilidades title="Back-End" skills={skillBack} color="red" />
        <CardsHabilidades
          title="Language"
          skills={skillLanguage}
        />
        <CardsHabilidades
          title="Ferramentas"
          skills={skillFerramenta}
        />
      </S.contentHabilidades>
      <Contato />
      <Footer />
    </>
  );
};

export default Habilidades;
