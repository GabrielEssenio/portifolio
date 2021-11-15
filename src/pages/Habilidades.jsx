import React from "react";
import { Header, Contato, Footer } from "../components";
import * as S from '../styles/Habilidades';
import { CardsHabilidades } from "../components/CardsHabilidades";

import {
  skillFront,
  skillBack,
  skillLanguage,
  skillFerramenta,
} from "../APIs/habilidades";

const Habilidades = () => {
  return (
    <>
      <Header />
      <S.contentHabilidades>
      <CardsHabilidades title="Front-End" skills={skillFront} color="orange" />
      <CardsHabilidades title="Back-End" skills={skillBack} color="red" />
      <CardsHabilidades title="Language" skills={skillLanguage} color="green" />
      <CardsHabilidades title="Ferramentas" skills={skillFerramenta} color="blue" />
      </S.contentHabilidades>
    </>

    

  );
};

export default Habilidades;
