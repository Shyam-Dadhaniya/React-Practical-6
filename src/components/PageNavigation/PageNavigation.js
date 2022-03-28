import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import NavigationStyle from "../../styled/navigation/navigation.style";

const PageNavigation = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPage } = useSelector((state) => state.user);
  const curr = currentPage;
  const previous = curr !== 1 ? curr - 1 : -1;
  const next = curr < totalPage ? curr + 1 : -1;
  const fetchPreviousPage = () => {
    dispatch(getUser(previous));
  };

  const fetchNextPage = () => {
    dispatch(getUser(next));
  };

  return (
    <>
      <NavigationStyle>
          {/* <button>Previous</button> */}
        {previous !== -1 && (
          <button onClick={fetchPreviousPage}>{curr - 1}</button>
        )}
        <button className='currentButton'>{curr}</button>
        {next !== -1 && <button onClick={fetchNextPage}>{curr + 1}</button>}
        {/* <button>Next</button> */}
      </NavigationStyle>
    </>
  );
};

export default PageNavigation;
