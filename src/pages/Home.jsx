import React from "react";
import { Header,Hero, Contato, Footer } from "../components";
import { basic, info } from "../APIs/sobremim";
import * as S from "../styles/HeroStyle";
const Home = () => {
  return ( 
    <>
      <main>
        <Header />
        <Hero />
        <S.globalSobremim>
        <S.titleText>Um pouco sobre mim</S.titleText>
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
      </main>
      
    </>
  );
};

export default Home;
