/* 每一个切片都包含reducer和action */
import { createSlice } from "@reduxjs/toolkit";

const voteSlice = createSlice({
    // 切片名字
    name: "vote",
    // 切片对应reducer的初始状态
    initialState: {
        supNum: 10,
        oppNum: 5
    },
    // 编写不同业务逻辑下对公共状态的更改
    reducers: {
        support(state, action) {
            // state: redux中的公共状态信息 基于immer库管理 无需事先再克隆了
            // action: 派发的行为对象 无需考虑行为标识的问题了 方法名就是行为标识 都是以action.payload传递进来的值
            state.supNum++;
        },
        oppose(state, action) {
            state.oppNum++;
        }
    }
});

export let { support, oppose } = voteSlice.actions;

export default voteSlice.reducer;