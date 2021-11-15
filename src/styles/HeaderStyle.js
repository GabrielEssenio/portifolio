import styled from 'styled-components';



export const mainContentNav = styled.nav` 
display: flex;
justify-content: center;
margin: 0;
padding: 0;
`

export const navBarContainer = styled.nav` 
display: flex;
margin: 0;
padding: 0;
height: 7vh;
width: 80%;
border-radius: 5px;
box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
background-color: #90e0ef;
justify-content:space-evenly;
`
export const ulBar = styled.ul`
align-items: center;
margin: 0;
padding: 0;
display: flex;
list-style-type: none;
overflow: hidden;
`

export const liBar = styled.li` 
padding: 0px 10px;
&:hover {
  background-color: red;
}
`

export const aBar = styled.a`
color: black;
text-decoration: none;
` 