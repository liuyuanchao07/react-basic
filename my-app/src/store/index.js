import { configureStore, Tuple } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise";
import {thunk} from "redux-thunk";
import voteSlice from "./slice/voteSlice"

const store = configureStore({
    reducer: {
        vote: voteSlice
    },
    middleware: () => new Tuple(reduxLogger, reduxPromise, thunk)
});

export default store;