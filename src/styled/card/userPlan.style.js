import styled from "styled-components";

const UserPlanStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  margin-bottom: 7px;
& .total {
    height: 4px;
    width: 100%;
    border-radius: 5px;
    background-color: lightgoldenrodyellow;
}

  & .progress {
    background-color: orange;
    height: 4px;
    width: 60%;
    border-radius: 5px;
  }
  & label{
    margin-bottom: 5px;
  }
  
`;

export default UserPlanStyle;
