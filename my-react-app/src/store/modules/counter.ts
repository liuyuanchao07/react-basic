import { createSlice } from "@reduxjs/toolkit"

const createrSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100,
        message: "hello redux"
    },
    reducers: {}
})

export default createrSlice.reducer