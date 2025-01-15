import { useDispatch } from "react-redux";
import {setOppNum, setAsyncSup} from "../store/slice/voteSlice"

const VoteFooter = () => {
    const dispatch = useDispatch();

    return (
        <div>
            VoteFooter:
            <button onClick={() => dispatch(setAsyncSup({step: 3}))}>支持</button>
            <button onClick={() => dispatch(setOppNum({step: 3}))}>反对</button>
        </div>
    )
}

export default VoteFooter;