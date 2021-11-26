import styled from 'styled-components';

export const content = styled.main`
width: 50vw;
display: flex;
flex-direction: column;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 20px;
width: 400px;
transition: all 0.3s ease-out;
background-color: #203856;
border-left: 10px solid #e36900;
&:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
`

export const ulHabilidades = styled.ul` 
width: 45vw;
display: flex;
flex-direction:column;
border-radius: 5px;
padding-left: 40px;
list-style-type: none;
overflow: hidden;
`


export const liHabilidades = styled.li` 
padding-bottom: 7px;
padding-top: 7px;
font-size: 24px;
color: #f1f4fa;

`

export const titleHabilidade = styled.h3`
font-size: 32px;
color: #f1f4fa;
text-align: center;
align-items: center;
text-decoration: underline wavy #e36900;
`

export const mainTitle = styled.h1`
text-align: center;
align-items: center;
padding-bottom: 20px;
`
export const contentHabilidades = styled.main`
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;