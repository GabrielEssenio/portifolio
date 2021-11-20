import React from "react";
import { basic, info } from "../APIs/sobremim";
import * as S from "../styles/Sobremim";
import { Header, Contato, Footer } from "../components";

const Sobremim = () => {
  return (
    <div>
      <Header />
      <S.globalSobremim>
        <h1>Um pouco sobre mim</h1>
        <S.mainSobremim>
    
            <S.imgSobremim src={basic.image} alt="" />
     
          <S.mainUl>
            <S.ulSobremim>
              {info.map(({ about }) => (
                <S.liSobremim>{about}</S.liSobremim>
              ))}
            </S.ulSobremim>
          </S.mainUl>
        </S.mainSobremim>
      </S.globalSobremim>
      <Contato />
      <Footer />
    </div>
  );
};

export default Sobremim;
