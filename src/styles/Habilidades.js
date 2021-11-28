import styled from 'styled-components';

export const contentHabilidades = styled.main`
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

export const content = styled.main`
display: flex;
flex-direction: column;
border-radius: 5px;
width: 400px;
margin: 30px 0px;
border: 1px solid white;
transition: all 0.3s ease-out;
z-index: 1;

background: linear-gradient(
    270deg,
    hsla(210, 100%, 35%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );

  background: -webkit-linear-gradient(
    270deg,
    hsla(210, 100%, 35%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );

&:hover {
  border: 7px solid white;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
`



export const titleHabilidades = styled.h1` 
font-size: 32px;
color: #f1f4fa;
text-align: center;
padding: 20px 0px;
`

export const ulHabilidades = styled.ul` 
width: 45vw;
display: flex;
flex-direction:column;
border-radius: 5px;
padding-left: 40px;
`

export const liHabilidades = styled.li` 
padding-bottom: 7px;
padding-top: 7px;
font-size: 24px;
font-weight: bold;
color: #DDDDDD;
/* &::marker {
  content: '🧔🏾';
} */
&:hover::marker {
  content: '☞';
}

`

export const titleHabilidade = styled.h1`
font-size: 32px;
color: #f1f4fa;
text-align: center;
align-items: center;
text-decoration: underline wavy  #000000;
`

export const mainTitle = styled.h1`
text-align: center;
align-items: center;
padding-bottom: 20px;
`
