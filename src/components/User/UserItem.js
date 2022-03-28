import React from "react";
import { FiTrash, FiLock } from "react-icons/fi";
import UserItemStyle from "../../styled/list/UserItem.style";
import NameBoxStyle from "../../styled/list/NameBox.style";
import NameStyle from "../../styled/list/Name.style";
import AvatarStyle from "../../styled/list/Avatar.style";
import DropDown from "../../styled/list/DropDown.style";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/userCardSlice";
const UserItem = (props) => {
  const dispatch = useDispatch();

  const mouseHoverHandler = () => {
    dispatch(
      cardActions.setUser({
        avatar: props.avatar,
        name: props.name,
        email: props.email,
      })
    );
  };

  const mouseLeavehandler = () => {
    dispatch(cardActions.removeUser());
  };
  const owner = (
    <>
      <div className="active">Active</div>

      <div>Owner</div>
      <div>
        <FiLock />
      </div>
    </>
  );
  const user = (
    <>
      <DropDown>
        <option>Active</option>
        <option>Inactive</option>
      </DropDown>
      <DropDown>
        <option>Manager</option>
        <option>Read</option>
      </DropDown>
      <div>
        <FiTrash />
      </div>
    </>
  );
  return (
    <>
      <UserItemStyle>
        <NameBoxStyle>
          <AvatarStyle
            src={props.avatar}
            alt={props.name}
            onMouseEnter={mouseHoverHandler}
            onMouseLeave={mouseLeavehandler}
          />
          <NameStyle>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
          </NameStyle>
        </NameBoxStyle>
        {props.id === 1 ? owner : user}
      </UserItemStyle>
    </>
  );
};

export default UserItem;
