import React from "react";
import UserCountStyle from "../../styled/card/userCount.style";
const UserCount = () => {
  return (
    <>
      <UserCountStyle>
        <div>
          <p className="digitInfo">2,450</p>
          <p className="info">Click Review</p>
        </div>
        <div className="line"></div>
        <div>
          <p className="digitInfo">5000</p>
          <p className="info">Monthly Click</p>
        </div>
      </UserCountStyle>
    </>
  );
};

export default UserCount;
