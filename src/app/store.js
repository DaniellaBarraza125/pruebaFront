import { configureStore } from "@reduxjs/toolkit";
import articles from "../features/articles/articlesSlice";

export const store = configureStore({
    reducer: {
        articles,
    },
});
