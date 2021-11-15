import React from 'react'
// import space from '../images/space.jpeg'
import * as S from '../styles/HeroStyle.js';
import Typewriter from 'typewriter-effect';


const Hero = () => {

  const timea = new Date();
  const time = timea.getHours()
  let bemVindo;
  console.log(time)
  if(Number(time) >= 18 ){
    bemVindo = "Boa Noite"
  }else if(Number(time) < 18 && Number(time) > 12 ){
    bemVindo = "Boa Tarde"
  }else{
    bemVindo = "Bom Dia"
  }

  return (
    <S.mainHero>
      <S.h1Hero>,
      {/* <S.>   */}
      <Typewriter
  options={{
    strings: [`${bemVindo}, Sou Gabriel Essênio`],
    autoStart: true,
    loop: true,
  }} />
      </S.h1Hero>
    </S.mainHero>
  )
}

export default Hero
