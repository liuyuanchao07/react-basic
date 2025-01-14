import { cloneDeep } from "lodash";
import * as TYPES from "../actionTypes"

let initial = {
  supNum: 10,
  oppNum: 5
};

/* 管理员: 修改STORE容器中的公共状态 */
const voteReducer = (state = initial, action) => {
    /* 
      state: 存储store容器中的公共状态（最开始没有的时候赋值初始值）
      action: 派发的行为对象 必须具有type属性存储派发的行为标识
      需要基于派发的行为标识修改store容器中的公共状态信息

      第一次派发: 是在redux内部派发
      + state没有值 会把initial的值赋给state
      + 传递的action.type不会和任何逻辑匹配
        dispatch({
          type: [随机值]
        });

      第二次派发: state是公共容器里的值 action是组件中手动派发的dispatch
    */
    const cloneObj = cloneDeep(state);
    if (action.type === TYPES.VOTE_SUP) {
      cloneObj.supNum++;
    } else if (action.type === TYPES.VOTE_OPP) {
      cloneObj.oppNum++;
    };
    // return的内容会整体替换store容器中的内容
    return cloneObj;
};
export default voteReducer;