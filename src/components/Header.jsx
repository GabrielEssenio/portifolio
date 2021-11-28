import React from "react";
import { saveAs } from "file-saver";
import * as S from "../styles/HeaderStyle";

const Header = () => {

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1yWj_Ce0boZNk-_u-f-XhPq6pPmFMMp5T/view?usp=sharing",
      "curriculo.pdf"
    );
  };


  // const scrollToBottom = () =>{ 
  //   window.scrollTo({ 
  //     top: document.documentElement.scrollHeight, 
  //     behavior: 'auto'
  //   }); 
  // }; 

  return (
    <S.navBarContainer>
      <S.ulBar>
        <S.liBar>
          <S.aBar href="/">Home</S.aBar>
        </S.liBar>
        {/* <S.liBar>
          <S.aBar href="sobremim">Sobre Mim</S.aBar>
        </S.liBar> */}
        <S.liBar>
          <S.aBar href="habilidades">Habilidades</S.aBar>
        </S.liBar>
        <S.liBar>
          <S.aBar href="projetos">Projetos</S.aBar>
        </S.liBar>
        <S.liBar>
        <S.aBar onClick={saveFile}>Download CV</S.aBar>
        </S.liBar>
        {/* <S.liBar>
        <S.aBar onClick={scrollToBottom}>Contato</S.aBar>
      </S.liBar> */}
        <div class="underbar"></div>
      </S.ulBar>
    </S.navBarContainer>
  );
};

export default Header;
