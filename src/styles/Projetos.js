import styled from 'styled-components';


export const globalProjetos = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
background-color: white;
`

export const mainProjetos = styled.main` 
background-color: black;
display: flex;
flex-direction: column;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 20px;
width: 45vw;
transition: all 0.3s ease-out;
border-left: 10px solid blue;
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
`
export const titleProject = styled.h2` 
color: white;
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