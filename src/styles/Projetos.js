import styled from 'styled-components';



export const globalProjetos = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
`

export const mainProjetos = styled.main` 
display: flex;
background-color: #222831;
transition: all 0.3s ease-out;
border-left: 10px solid #F05454;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
width: 30%;
padding: 50px;
margin: 20px;
&:hover {
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
width: 100vw;
height: 100%;
`

export const titleProjetos = styled.h2` 
text-align: center;
color: #222831;
;
`



export const titleProject = styled.h2` 
text-align: center;
color: #DDDDDD;
`

export const imgProjetos = styled.img` 
width: 100%;
`

export const cardDiv = styled.div` 
display: flex;
flex-direction: column;
`

export const eachProject = styled.div` 
display: flex;
flex-direction: row;
justify-content:start;
align-items: center;
width: 100%;
`

export const a = styled.a` 
width: 100%;
margin-right:20px ;
`

export const textProjeto = styled.p` 
color:white;
size: 20px;
text-align: justify;
`
