import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostDetails: (state, action) => {
      state.posts = action.payload;
    },
  },
});
 