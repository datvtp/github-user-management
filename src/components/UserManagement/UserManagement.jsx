import { useEffect, useState } from "react";

import { useDebounce } from "@uidotdev/usehooks";

import { Box } from "@welcome-ui/box";
import { InputText } from "@welcome-ui/input-text";

import api from "../../axios";

import UserTable from "./UserTable";

function UserManagement() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [userData, setUserData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async (search) => {
    setIsLoading(true);
    const response = await api.get(
      `https://api.github.com/search/users?q=${search}`
    );
    setUserData(response.data.items);
    const totalCount = response.data.total_count;
    setTotalPage(totalCount > 10 ? totalCount % 10 : 1);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!debouncedSearchValue) {
      setUserData([]);
      return;
    }

    fetchUsers(debouncedSearchValue);
  }, [debouncedSearchValue]);

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
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        w={500}
        placeholder="Search users from Github"
      />

      <UserTable
        userData={userData}
        totalPage={totalPage}
        isLoading={isLoading}
      />
    </Box>
  );
}

export default UserManagement;
