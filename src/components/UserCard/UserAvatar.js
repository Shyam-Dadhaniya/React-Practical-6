import React from "react";
import UserAvatarStyle from "../../styled/card/userAvatar.style";
import { useSelector } from "react-redux";
const UserAvatar = () => {
  const userDetails = useSelector((state) => state.card.user);
  return (
    <>
      <UserAvatarStyle
        src={userDetails.avatar}
        alt={userDetails.name}
      ></UserAvatarStyle>
    </>
  );
};

export default UserAvatar;
