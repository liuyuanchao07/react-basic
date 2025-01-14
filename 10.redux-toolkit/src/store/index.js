/*
  redux-toolkit: 最大的特点是基于切片机制 把reduer和action混合在一起了
*/
import { configureStore, Tuple } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import { thunk } from "redux-thunk";
import reduxPromise from "redux-promise";
import voteSliceReducer from "./features/voteSlice";

const store = configureStore({
  // 指定reducer 类似于combineReducers
  reducer: {
    // 按模块管理切片导出的reducer
    vote: voteSliceReducer
  },
  // 使用中间件 如果不指定任何中间件 则默认集成了redux-thunk 但是一旦设置 会整体替换默认值 需要手动设置redux-thunk中间件
  middleware: () => new Tuple(reduxLogger, thunk, reduxPromise),
});

export default store;