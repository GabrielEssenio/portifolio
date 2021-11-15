import styled from 'styled-components';


export const globalSobremim = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
background-color: white;
`

export const mainSobremim = styled.main` 
display: flex;
flex-direction: row;
padding-bottom: 7px;
padding-top: 7px;
align-items: center;
`

export const imgSobremim = styled.img` 
height: 250px;
margin-left: 10vw;
border-radius: 50%;
`

export const mainUl = styled.section` 
display: flex;
justify-content: start;
`

export const ulSobremim = styled.ul` 
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
list-style-type: none;
`


export const liSobremim = styled.li` 
padding-bottom: 7px;
padding-top: 7px;
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
`