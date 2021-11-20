
import React
// , {useEffect}
from 'react';
import * as S from '../styles/Habilidades';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
export const CardsHabilidades = ({title,skills,color}) => {
  
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);

  return (
 
      <S.content 
      color={color} 
      >
      <S.titleHabilidade>{title}</S.titleHabilidade>
      <S.ulHabilidades >
        {skills.map(({ name, level,image}) => (
          <S.liHabilidades>
           {image ? <img src={image} alt={name}  width="50px"/>: null}
              {`  ${name}: ${level}`}</S.liHabilidades>
        ))}
      </S.ulHabilidades>
      </S.content>
  
  )
}
