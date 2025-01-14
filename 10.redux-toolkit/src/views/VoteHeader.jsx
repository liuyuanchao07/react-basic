import { useSelector } from "react-redux";

const VoteHeader = () => {
  // useSelector 获取公共状态
  let {supNum, oppNum} = useSelector(state => state.vote);
  return (
    <div>VoteHeader: 合计 { supNum + oppNum }</div>
  )
}
export default VoteHeader;