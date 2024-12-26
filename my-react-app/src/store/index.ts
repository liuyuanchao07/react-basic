import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"


// 创建store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store