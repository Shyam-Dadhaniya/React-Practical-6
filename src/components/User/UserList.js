import React from "react";
import UserItem from "./UserItem";
// import UserListData from "../../mocks/data";
import { useSelector } from "react-redux";
import PageNavigation from "../PageNavigation/PageNavigation";
import LoderStyle from "../../styled/loader/loader.style";
const UserList = () => {
  const { user, status } = useSelector((state) => state.user);
  const loading = <LoderStyle/>;
  
  return (
    <>
      {status === "pending" && loading}
      {status === "success" &&
        user.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
          />
        ))}
      <PageNavigation />
    </>
  );
};

export default UserList;
