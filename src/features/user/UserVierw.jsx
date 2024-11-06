import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from "../user/userSlice";
import { useEffect } from "react";
export const UserVierw = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
        <h2>List Of Users</h2>
        {user.loading && <p> Loading .... </p>}
        {!user.loading && user.error ? <p> Error {user.error}</p> : null}
        {!user.loading && user.users.length ? (
          <ul>
            
          </ul>
        ) : <div>Testing</div>}
    </div>
  )
}
