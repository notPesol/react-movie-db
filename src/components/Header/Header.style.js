import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0px;
  margin: 0px auto;
  color: var(--white);

  a{
    color: var(--white);
    text-decoration: none;
  }

  button{
    color: var(--white);
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px){
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px){
    width: 80px;
  }
`;