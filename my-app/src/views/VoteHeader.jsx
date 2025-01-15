import { useSelector } from "react-redux";

const VoteHeader = () => {
  let {vote: {sup, opp}} = useSelector(state => state);
  
  return (
    <div>VoteHeader: 合计 {sup + opp}</div>
  )
}
export default VoteHeader;