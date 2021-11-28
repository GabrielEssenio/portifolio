import styled from 'styled-components';

export const navBarContainer = styled.nav` 
display: flex;
height: 10vh;
width: 100%;
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
`

export const ulBar = styled.ul`
display: flex;
align-items: center;
margin: 0;
padding: 0;
/* list-style: none; */
width: 100%;
justify-content: space-around;
`

export const liBar = styled.li` 
display: flex;
justify-content: space-between;
&:hover{
    text-shadow: 0px -2px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5);
  }
`

export const aBar = styled.a`
font-size: x-large;
text-decoration: none;
color: #F5F5F5;
`