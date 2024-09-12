import { useEffect } from "react";

import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@welcome-ui/box";
import { InputText } from "@welcome-ui/input-text";

import { clearUsers, fetchUsers, setQuery } from "../../redux/userSearchSlice";

import UserTable from "./UserTable";

function UserManagement() {
  const dispatch = useDispatch();
  const { users, totalPage, status, query } = useSelector(
    (state) => state.userSearch
  );
  const debouncedSearchValue = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedSearchValue) {
      dispatch(clearUsers());
      return;
    }

    dispatch(fetchUsers(debouncedSearchValue));
  }, [debouncedSearchValue, dispatch]);

  return (
    <Box
      w={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      spaceY="lg"
    >
      <InputText
        value={query}
        onChange={(event) => {
          dispatch(setQuery(event.target.value));
        }}
        w={500}
        placeholder="Search users from Github"
      />

      <UserTable
        users={users}
        totalPage={totalPage}
        isLoading={status === "loading"}
      />
    </Box>
  );
}

export default UserManagement;
