import PropTypes from "prop-types";

import { Avatar } from "@welcome-ui/avatar";
import { Box } from "@welcome-ui/box";
import { Loader } from "@welcome-ui/loader";
import { Pagination } from "@welcome-ui/pagination";
import { Table } from "@welcome-ui/table";
import { Text } from "@welcome-ui/text";

UserTable.propTypes = {
  userData: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function UserTable({ userData, totalPage, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }

  if (!userData.length) {
    return <Text>Empty</Text>;
  }

  return (
    <Box
      w={1}
      maxW={800}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Avatar</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Score</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {userData.map(({ id, avatar_url, login, type, score }) => (
            <Table.Tr key={id}>
              <Table.Td>
                <Avatar name={login} src={avatar_url} />
              </Table.Td>
              <Table.Td>
                <Text>{login}</Text>
              </Table.Td>
              <Table.Td>
                <Text>{type}</Text>
              </Table.Td>
              <Table.Td>
                <Text>{score}</Text>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Pagination
        aria-label="Pagination"
        onChange={console.log}
        page={1}
        pageCount={totalPage}
      />
    </Box>
  );
}

export default UserTable;
