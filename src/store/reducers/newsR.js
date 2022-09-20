import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  news: [],
  loading: true,
  error: "",
};

// export const newsReducer = (state = initialState, action) => {
//   if (action.type === "setNews") {
//     return {
//       ...state,
//       news: action.payload,
//     };
//   }
//   return state;
// };
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload.news;
      state.loading = false;
    },
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
export const { setNews } = newsSlice.actions;
