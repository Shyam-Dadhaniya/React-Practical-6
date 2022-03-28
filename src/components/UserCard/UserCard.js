import React from "react";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserPlan from "./UserPlan";
import UserCount from "./UserCount";
import UserCardStyle from "../../styled/card/userCard.style";

const UserCard = () => {
  return (
    <UserCardStyle>
      <UserAvatar/>
      <UserInfo />
      <UserPlan />
      <UserCount />
    </UserCardStyle>
  );
};

export default UserCard;
