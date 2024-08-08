import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
};
export const getArticles = createAsyncThunk(
    "articles/getArticles",
    async () => {
        console.log(articles);
    },
);

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
});

export default articlesSlice.reducer;
