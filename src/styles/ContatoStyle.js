import styled from "styled-components";

export const contentDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
export const mainContentContato = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export const eachContato = styled.div`
padding-right: 40px;
transition: all 0.3s ease-out;
&:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
`;

export const imgContato = styled.img`
  width: 50px;
`;

export const subDiv = styled.div`
display: flex;
flex-direction: row;
`;

export const titleContatos = styled.h1`
color: #F5F5F5;
font-size: 36px;
margin-bottom:20px;
margin-top:60px ;

`;
