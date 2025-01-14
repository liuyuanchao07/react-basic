import { useSelector } from "react-redux";

const VoteMain = () => {
    let {supNum, oppNum} = useSelector(state => state.vote);
    return (
        <div>VoteMain: 支持{supNum} 反对{oppNum}</div>
    )
}
export default VoteMain;