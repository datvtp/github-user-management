import { Provider as ReduxProvider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Box } from "@welcome-ui/box";
import { WuiProvider, createTheme } from "@welcome-ui/core";
import { UserIcon } from "@welcome-ui/icons";
import { Text } from "@welcome-ui/text";

import UserManagement from "./components/UserManagement/UserManagement";
import store from "./redux/store";

const theme = createTheme();

function App() {
  return (
    <WuiProvider theme={theme}>
      <ReduxProvider store={store}>
        <Box p="md">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            spaceX="md"
          >
            <UserIcon size="xl" color="primary-700" />
            <Text variant="h1" color="primary-700">
              Github User Management App
            </Text>
          </Box>
          <Routes>
            <Route path="/" element={<UserManagement />} />
          </Routes>
        </Box>
      </ReduxProvider>
    </WuiProvider>
  );
}

export default App;
