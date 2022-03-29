import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/reducers/userReducer";
import NavigationStyle from "../../styled/navigation/navigation.style";

const PageNavigation = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPage, perPage } = useSelector(
    (state) => state.user
  );

  const curr = currentPage;
  const previous = curr !== 1 ? curr - 1 : -1;
  const next = curr < totalPage ? curr + 1 : -1;
  const fetchPreviousPage = () => {
    dispatch(getUser({ page: previous, perPage: perPage }));
  };

  const fetchNextPage = () => {
    dispatch(getUser({ page: next, perPage: perPage }));
  };
  const perPageHandler = (event) => {
    dispatch(getUser({ page: 1, perPage: event.target.value }));
  };
  return (
    <>
      <NavigationStyle>
        <select onChange={perPageHandler}>
          <option value={2}>2 Per Page</option>
          <option value={3}>3 Per Page</option>
          <option value={4}>4 Per Page</option>
          <option value={5}>5 Per Page</option>
          <option value={6}>6 Per Page</option>
        </select>
        {previous !== -1 && (
          <button onClick={fetchPreviousPage}>{curr - 1}</button>
        )}
        <button className="currentButton">{curr}</button>
        {next !== -1 && <button onClick={fetchNextPage}>{curr + 1}</button>}
        {/* <button>Next</button> */}
      </NavigationStyle>
    </>
  );
};

export default PageNavigation;
