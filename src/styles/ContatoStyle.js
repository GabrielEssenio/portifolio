import styled from 'styled-components';

export const links = styled.a `
color: black;
display: flex;
text-decoration: none;
margin: 12px;
&:hover {
  opacity: 0.5;
}
color:white;
`

export const container = styled.main`
width:100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 5px 0px;
align-items: center;
border: 3px solid black;
background-color: #041A49;
border-radius: 5px;
`