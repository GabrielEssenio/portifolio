import React from "react";
// import sobremim from "../APIs/sobremim";
import * as S from '../styles/HeaderStyle'

const Header = () => {
  return (
      <S.navBarContainer>
          <S.ulBar>
            <S.liBar>
              <S.aBar  href="">Home</S.aBar>
            </S.liBar>
            <S.liBar>
              <S.aBar  href="sobremim">Sobre Mim</S.aBar>
            </S.liBar>
            <S.liBar>
              <S.aBar  href="habilidades">Habilidades</S.aBar>
            </S.liBar>
            <S.liBar>
              <S.aBar  href="projetos">Projetos</S.aBar>
            </S.liBar>
            <S.liBar>
              <S.aBar  href="#">Download CV</S.aBar>
            </S.liBar>
            <S.liBar>
              <S.aBar  href="">Contatos</S.aBar>
            </S.liBar>
          </S.ulBar>
      </S.navBarContainer>
  );
};

export default Header;
