import styled from "styled-components";

const NavigationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  & select {
    height: 25px;
    width: 90px;
    background-color: #e5e0d6;
    border: none;
    margin-left: 10px;
    border-radius: 2px;
  }
  & button{
    height: 25px;
    width: 25px;
    background-color: #e5e0d6;
    border: none;
    margin-left: 10px;
    border-radius: 2px;
  }

  & .currentButton {
    background-color: orange;
  }
`;

export default NavigationStyle;
