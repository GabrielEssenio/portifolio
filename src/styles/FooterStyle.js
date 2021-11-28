import styled from "styled-components";

export const mainContentFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

export const footer = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
  background-color: #FB8E0D;
  width: 50%;
  margin-bottom: 50px;
  
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
`;

export const h4 = styled.footer`
  padding: 0px;
  text-align: center;
  color: #f1f4fa;
  &:hover {
    opacity: 0.5;
  }
`;
