import { Avatar } from "@welcome-ui/avatar";
import { Box } from "@welcome-ui/box";
import { InputText } from "@welcome-ui/input-text";
import { Table } from "@welcome-ui/table";
import { Text } from "@welcome-ui/text";

const data = [
  {
    login: "q",
    id: 65956,
    node_id: "MDQ6VXNlcjY1OTU2",
    avatar_url: "https://avatars.githubusercontent.com/u/65956?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/q",
    html_url: "https://github.com/q",
    followers_url: "https://api.github.com/users/q/followers",
    following_url: "https://api.github.com/users/q/following{/other_user}",
    gists_url: "https://api.github.com/users/q/gists{/gist_id}",
    starred_url: "https://api.github.com/users/q/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/q/subscriptions",
    organizations_url: "https://api.github.com/users/q/orgs",
    repos_url: "https://api.github.com/users/q/repos",
    events_url: "https://api.github.com/users/q/events{/privacy}",
    received_events_url: "https://api.github.com/users/q/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "acid-chicken",
    id: 20679825,
    node_id: "MDQ6VXNlcjIwNjc5ODI1",
    avatar_url: "https://avatars.githubusercontent.com/u/20679825?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/acid-chicken",
    html_url: "https://github.com/acid-chicken",
    followers_url: "https://api.github.com/users/acid-chicken/followers",
    following_url:
      "https://api.github.com/users/acid-chicken/following{/other_user}",
    gists_url: "https://api.github.com/users/acid-chicken/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/acid-chicken/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/acid-chicken/subscriptions",
    organizations_url: "https://api.github.com/users/acid-chicken/orgs",
    repos_url: "https://api.github.com/users/acid-chicken/repos",
    events_url: "https://api.github.com/users/acid-chicken/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/acid-chicken/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "turbio",
    id: 1428207,
    node_id: "MDQ6VXNlcjE0MjgyMDc=",
    avatar_url: "https://avatars.githubusercontent.com/u/1428207?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/turbio",
    html_url: "https://github.com/turbio",
    followers_url: "https://api.github.com/users/turbio/followers",
    following_url: "https://api.github.com/users/turbio/following{/other_user}",
    gists_url: "https://api.github.com/users/turbio/gists{/gist_id}",
    starred_url: "https://api.github.com/users/turbio/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/turbio/subscriptions",
    organizations_url: "https://api.github.com/users/turbio/orgs",
    repos_url: "https://api.github.com/users/turbio/repos",
    events_url: "https://api.github.com/users/turbio/events{/privacy}",
    received_events_url: "https://api.github.com/users/turbio/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

function UsersTable() {
  return (
    <Box
      w={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      spaceY="lg"
    >
      <InputText w={500} placeholder="Search users from Github" />

      <Table maxW={800}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Avatar</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Score</Table.Th>
          </Table.Tr>
        </Table.Thead>

        {data ? (
          <Table.Tbody>
            {data.map(({ id, avatar_url, login, type, score }) => (
              <Table.Tr key={id}>
                <Table.Td>
                  <Avatar name="Welcome jungle" src={avatar_url} />
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
        ) : (
          <Text>...</Text>
        )}
      </Table>
    </Box>
  );
}

export default UsersTable;
