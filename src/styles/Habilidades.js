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
border-left: 10px solid ${props =>props.color};
&:hover {
  transform: translateY(-5px);
  cursor: pointer;
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
`

export const titleHabilidade = styled.h3`
text-align: center;
align-items: center;
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