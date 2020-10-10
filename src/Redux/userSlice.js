import { createSlice } from "@reduxjs/toolkit";

const state = {
  authenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    setUser: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;
