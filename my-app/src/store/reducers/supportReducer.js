import { cloneDeep } from "lodash";
import * as TYPES from "../actionTypes"

let initial = {
  supportNum: 10,
};

const supportReducer = (state = initial, action) => {
    const cloneObj = cloneDeep(state);
    if (action.type === TYPES.SUPPORT) {
      cloneObj.supportNum++;
    }
    return cloneObj;
};
export default supportReducer;