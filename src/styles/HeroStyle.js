import styled from 'styled-components';

export const mainHero = styled.main`
width: 100%;
height: 20vh;
`
export const h1Hero = styled.h1`
color: white;
text-align: center;
justify-content: center;
font-size: 36px;
padding-top: 50px;
`

// Sobre Mim

export const globalSobremim = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

export const mainSobremim = styled.main` 
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

export const imgSobremim = styled.img` 
width:400px;
border-radius: 15%;
z-index: 1;

`

export const mainUl = styled.section` 
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

box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);

display: flex;
justify-content: start;
`


export const titleText = styled.h1` 
font-size: 40px;
color: #F5F5F5;
padding-top: 50px;
padding-bottom: 50px;
`


export const ulSobremim = styled.ul` 
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
list-style-type: none;
margin: 0;
padding-left: 20px;
padding-right: 20px;
li:nth-child(odd) {
  color: #f1f4fa;
font-size:24px;

}
`


export const liSobremim = styled.li` 
padding-bottom: 7px;
padding-top: 7px;
color: #99f3ff;
font-size:24px;
padding-top:20px ;
padding-bottom:20px ;
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

`