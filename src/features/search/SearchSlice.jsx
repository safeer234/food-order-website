import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: ""
  },
  reducers: {
    handleSearch: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;
