import styled from "styled-components";

const UserCountStyle = styled.div`
  display: flex;

  & .line {
    width: 2px;
    height: 38px;
    background-color: lightgray;
    margin: 0px 24px;
  }
 & .digitInfo{
   font-weight: 600;
 }
  & .info {
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
  }
`;

export default UserCountStyle;
