import { configureStore } from "@reduxjs/toolkit";
import { stocksApi } from "../services/stocksApi";
import { groupsApi } from "../services/groupsApi";
import { newsApi } from "../services/stockNewsApi";
import { stockHistory } from "../services/stockHistory";
import { listApi } from "../services/allStocksApi";
export default configureStore({
    reducer:{
        [stocksApi.reducerPath]: stocksApi.reducer,
        [groupsApi.reducerPath]: groupsApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [stockHistory.reducerPath]: stockHistory.reducer,
        [listApi.reducerPath]: listApi.reducer
    },
})