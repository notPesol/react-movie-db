import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--lightGray);
  border-top: 5px solid var(--medGray);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  animation: spin 1s linear infinite;

  @keyframes spin{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`;