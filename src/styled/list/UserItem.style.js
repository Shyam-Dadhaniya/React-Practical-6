import styled from "styled-components";

const UserItemStyle = styled.div`
  display: grid;
  grid-template-columns: 20rem 10rem 10rem 2rem;
  align-items: center;
  padding: 0px 0px 20px 10px;

  & .active {
    color: green;
  }
`;
export default UserItemStyle;
