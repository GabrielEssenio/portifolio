import styled from 'styled-components';

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
justify-content: space-around;
`

export const imgSobremim = styled.img` 
height: 250px;
margin-left: 10vw;
border-radius: 50%;
`

export const mainUl = styled.section` 
border-radius: 5px;
background-color: #060401;
box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
background-repeat: no-repeat;
display: flex;
justify-content: start;
`


export const titleText = styled.h1` 
font-size: 40px;
color: #060401;
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
}
`


export const liSobremim = styled.li` 
padding-bottom: 7px;
padding-top: 7px;
color: #FFC500;
font-size:20px;
padding-top:20px ;
padding-bottom:20px ;
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

`