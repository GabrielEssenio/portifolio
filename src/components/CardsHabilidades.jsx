
import React from 'react';
import * as S from '../styles/Habilidades';
export const CardsHabilidades = ({title,skills,color}) => {
  return (
 
      <S.content color={color}>
      <S.titleHabilidade>{title}</S.titleHabilidade>
      <S.ulHabilidades>
        {skills.map(({ name, level,image}) => (
          <S.liHabilidades>
           {image ? <img src={image} alt={name}  width="50px"/>: null}
              {`  ${name}: ${level}`}</S.liHabilidades>
        ))}
      </S.ulHabilidades>
      </S.content>
  
  )
}
