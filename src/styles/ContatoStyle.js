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
  transform: translateY(-10px);
  cursor: pointer;
}
`;

export const imgContato = styled.img`
  width: 70px;
`;

export const subDiv = styled.div`
display: flex;
flex-direction: row;
`;

