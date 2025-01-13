
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../ThemeContext";

const VoteHeader = () => {
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

  return (
    <div>VoteHeader: 合计 { supNum + oppNum }</div>
  )
}
export default VoteHeader;