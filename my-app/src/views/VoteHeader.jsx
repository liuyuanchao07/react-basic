
// import { useContext, useEffect, useState } from "react";
// import ThemeContext from "../ThemeContext";
import { connect } from "react-redux";

const VoteHeader = (props) => {
  /*
  let { store } = useContext(ThemeContext);
  let { supNum, oppNum } = store.getState().vote;

  let [num, setNum] = useState(0);
  
  const update = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    // 让组件更新的方法放在store容器的事件池中
    let unsubscribe = store.subscribe(update);

    return () => {
      // 可以把事件池中方法移除
      unsubscribe();
    };
  }, [num]);
  */

  let { supNum, oppNum } = props;

  return (
    <div>VoteHeader: 合计 { supNum + oppNum }</div>
  )
}
export default connect(state => state.vote)(VoteHeader);

/* 
  connect(mapStateToProps, mapDispatchToProps)(component)
  mapStateToProps: 可以获取到redux中的公共状态 需要的信息作为属性props传递给组件即可
  mapDispatchToProps: 把需要派发的任务 当作属性props传递给组件
*/