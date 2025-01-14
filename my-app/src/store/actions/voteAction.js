import * as TYPES from "../actionTypes";

// 延迟函数: 返回promise实例 在指定的事件后才能让实例为成功
const delay = (interval = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
};

const voteAction = {
    /*
      react-redux中基于bindActionCreators处理的结果
      {
        support() {
          dispatch(voteAction.supNum());
        }
      }

      点击的时候执行supNum:
      立即执行voteAction.supNum() 立即返回的是promise<pending>
      我们派发的任务对象是那个promise实例（不具备type属性）
    */
    
    // redux-thunk的用法
    supNum() {
        /*
          第一步 首先方法执行返回一个函数 内部给函数设置一个type属性 属性值不会和reducer中的逻辑匹配
          第二步 把返回的函数执行 把派发的方法dispatch传递给函数 函数中执行异步操作 异步成功后 再手动基于dispatch进行派发
        */
        return async (dispatch) => {
            await delay();
            dispatch({
                type: TYPES.VOTE_SUP
            })
        }
    },
    // redux-promise的用法
    async oppNum() {
        await delay();
        return {
            type: TYPES.VOTE_OPP
        }
    }
}

export default voteAction;