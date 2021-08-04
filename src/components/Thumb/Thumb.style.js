import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover{
    opacity: 0.7;
    width: 105%;
    cursor: pointer;
  }

  @keyframes animateThumb {
    from{
      opacity: 0;
      width: 50%;
    }
    to{
      opacity: 1;
      width: 100%;
    }
  };
`;