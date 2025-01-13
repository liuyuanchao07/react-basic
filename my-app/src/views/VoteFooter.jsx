import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const VoteFooter = () => {
    let { store } = useContext(ThemeContext);

    return (
        // dipatch传的对象就是给reducer中action传的
        <div>
            VoteFooter:
            <button onClick={() => {
                store.dispatch({
                    type: "VOTE_SUP"
                })
            }}>支持</button>
            <button onClick={() => {
                store.dispatch({
                    type: "VOTE_OPP"
                })
            }}>反对</button>
        </div>
    )
}
export default VoteFooter;