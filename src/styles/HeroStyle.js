import styled from 'styled-components';
import heroimage from '../images/blackyellor.jpg'
// import heroimage2 from '../images/heroportifolio2.jpg'
// import heroimage3 from '../images/heroportifolio3.jpg'

export const mainHero = styled.main`
width: 100vw;
height: 80vh;
background-size: cover, contain;
background-repeat: no-repeat;
background-image: url(${heroimage});
position: relative;

`

export const h1Hero = styled.h1`
color: white;
font-size: large;
text-align: center;
justify-content: center;
font-size: 30px;
padding-top: 80px;
`
export const test = styled.div`
whidth: 20%;
`