import React from "react";
import MainStyle from "../styled/Main.styles";
import Header from "../components/Header/Header";
import UserList from "../components/User/UserList";
import UserCard from "../components/UserCard/UserCard";
import { useSelector } from "react-redux";
const UserListContainer = () => {
  const user = useSelector((state) => state.card.user);
  return (
    <MainStyle>
      <Header />
      <UserList />
      {user && (
        <UserCard>
          email={user.email} name={user.name} avatar={user.avatar}
        </UserCard>
      )}
    </MainStyle>
  );
};

export default UserListContainer;
