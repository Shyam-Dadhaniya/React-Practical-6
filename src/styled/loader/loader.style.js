import styled from "styled-components";

const LoderStyle = styled.div`
  margin: 200px auto;
  border: 10px solid white;
  width: 50px;
  height: 50px;
  border-top-color: #f39c12;
  border-bottom-color: #f39c12;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoderStyle;
