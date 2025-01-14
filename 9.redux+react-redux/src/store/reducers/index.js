import { combineReducers } from "redux";
import voteReducer from "./voteReducer";
import supportReducer from "./supportReducer";

// 合并各个模块创建出一个总的reducer
const reducer = combineReducers({
  vote: voteReducer,
  support: supportReducer
});

/*
  结果相当于:
  state: {
    vote: {
      supNum: 10,
      oppNum: 5
    },
    support: {
      supportNum: 10
    }
  }
*/

export default reducer;