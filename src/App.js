import React , {useEffect} from "react";
// import { useSelector } from "react-redux";
import UserListContainer from "./container/UserListContainer";
import { getUser } from "./store/reducers/userReducer";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  // const {currentPage} = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getUser({page : 1,perPage: 2}))
  }, [])
  return <UserListContainer />;
}

export default App;
