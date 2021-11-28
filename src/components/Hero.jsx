import React from 'react'
import * as S from '../styles/HeroStyle.js';
import Typewriter from 'typewriter-effect';

const Hero = () => {

  const timea = new Date();  
  const time = timea.getHours()
  let bemVindo;
  if(Number(time) >= 18 ){
    bemVindo = "Boa Noite"
  }else if(Number(time) < 18 && Number(time) > 12 ){
    bemVindo = "Boa Tarde"
  }else{
    bemVindo = "Bom Dia"
  }

  return (
    <S.mainHero>
      <S.h1Hero>
      <Typewriter
  options={{
    strings: [`${bemVindo}, Meu nome é Gabriel Essênio`],
    autoStart: true,
    loop: true,
  }} />
      Sou Desenvolvedor Full Stack <br/> 
   
      </S.h1Hero> 
    </S.mainHero>
  )
}

export default Hero
