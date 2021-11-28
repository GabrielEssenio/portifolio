import styled from 'styled-components';



export const globalProjetos = styled.div` 
display:flex;
flex-direction: column;
text-align: center;
align-items: center;
`

export const mainProjetos = styled.main` 
display: flex;
flex-direction: row;
transition: all 0.3s ease-out;
border: 1px solid white;
border-radius: 5%;
margin: 20px 0px;
width: 40%;
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

export const scrollProjetos = styled.div` 
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 100%; 
`

export const titleProjetos = styled.h1` 
text-align: center;
font-size:36px;
padding-top: 50px;
padding-bottom: 50px;
color: #F5F5F5;
;
`

export const titleProject = styled.h2` 
font-size:30px;
padding: 20px 0px;
text-align: center;
color: #F5F5F5;
`

export const divImage = styled.div` 
height:150px;
`

export const imgProjetos = styled.img` 
padding-top: 10px;
object-fit: contain;
height: 100%;
width: 100%;
border-radius: 25%;
`

export const cardDiv = styled.div` 
display: flex;
flex-direction: column;
`

export const eachProject = styled.div` 
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-items: center;
width: 100%;
`

export const a = styled.a` 
margin-right:20px;
all: unset;
`


export const divText = styled.p` 
height: 300px;
`

export const textProjeto = styled.p` 
color:white;
font-size: 16px;
font-weight: bold;
text-align: justify;
padding: 20px 20px;
line-height: 2.5;
`
export const buttonProject = styled.button` 
font-size: 20px;
margin-bottom: 20px;
text-align: justify;
color: white;
border-radius: 15%;
background: -webkit-linear-gradient(
  270deg,
  hsla(210, 100%, 35%, 1) 0%,
  hsla(0, 0%, 0%, 1) 100%
  );
  &:hover {
  background: white;
  color: black
}
`
