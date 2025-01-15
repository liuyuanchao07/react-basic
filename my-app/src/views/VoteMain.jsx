import { useSelector } from "react-redux";
const VoteMain = () => {

    const {vote: {sup, opp}} = useSelector(state => state);
    return (
        <div>VoteMain: 支持{sup} 反对{opp}</div>
    )
}
export default VoteMain;