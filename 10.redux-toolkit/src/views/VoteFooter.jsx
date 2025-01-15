import { useDispatch } from "react-redux";
import { support, oppose, setAsyncSup } from "../store/features/voteSlice";

const VoteFooter = () => {
    // useDispatch 获取派发的方法
    let dispatch = useDispatch();
    return (
        <div>
            VoteFooter:
            <button onClick={
                () => dispatch(setAsyncSup())
            }>支持</button>
            <button onClick={
                () => dispatch(oppose())
            }>反对</button>
        </div>
    )
}

export default VoteFooter;