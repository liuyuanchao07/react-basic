import { createSlice } from "@reduxjs/toolkit";

const delay = (interval = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
};

const voteSlice = createSlice({
    name: "voteSlice",
    initialState: {
        sup: 10,
        opp: 5
    },
    reducers: {
        setSupNum(state, action) {
            state.sup += action.payload.step;
        },
        setOppNum(state, action) {
            state.opp -= action.payload.step;
        }
    }
});

export let {setOppNum, setSupNum} = voteSlice.actions;

// export const setAsyncSup = async (el) => {
//     return async (dispatch) => {
//         await delay();
//         dispatch(setSupNum(el));
//     }
// }

export const setAsyncSup = async (el) => {
    await delay();
    return setSupNum(el);
}

export default voteSlice.reducer;