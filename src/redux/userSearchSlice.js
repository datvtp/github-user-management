import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { searchUsers } from "../axios";

export const fetchUsers = createAsyncThunk(
  "userSearch/fetchUsers",
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchUsers(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState: {
    users: [],
    totalPage: 1,
    status: "idle",
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
      state.totalPage = 1;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.items;
        state.totalPage =
          action.payload.total_count > 10 ? action.payload.total_count % 10 : 1;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clearUsers, setQuery } = userSearchSlice.actions;

export default userSearchSlice.reducer;
