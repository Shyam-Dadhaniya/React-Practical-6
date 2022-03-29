import React from "react";
import { useSelector } from "react-redux";
import UserInfoStyle from "../../styled/card/userInfo.style";
const UserInfo = () => {
  const userDetails = useSelector((state) => state.card.user);
  return (
    <>
      <UserInfoStyle>
        <p className="name">
          {userDetails.name}
          <span className="active">&#729;</span>
        </p>
        <p className="email">{userDetails.email}</p>
        <p className="plan">Your Plan: Standard</p>
        <button className="button">Active User</button>
      </UserInfoStyle>
    </>
  );
};

export default UserInfo;
