// import ThemeContext from "../ThemeContext";
import actions from "../store/actions";
// import { useContext } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const VoteFooter = (props) => {
    // let { store } = useContext(ThemeContext);

    let { supNum, oppNum } = props;

    return (
        // dipatch传的对象就是给reducer中action传的
        <div>
            VoteFooter:
            {/* <button onClick={() => {
                store.dispatch(actions.voteAction.supNum())
            }}>支持</button>
            <button onClick={() => {
                store.dispatch(actions.voteAction.oppNum())
            }}>反对</button> */}

            <button onClick={supNum}>支持</button>
            <button onClick={oppNum}>反对</button>
        </div>
    )
}

export default connect(
    null,
    // 标准写法 返回对象中的信息 会作为属性传递给组件
    // dispatch => {
    //     return {
    //         supNum() {
    //             dispatch(actions.voteAction.supNum());
    //         },
    //         oppNum() {
    //             dispatch(actions.voteAction.oppNum());
    //         }
    //     }
    // }

    /*
      connect内部会把actions.voteAction中的写法会自动编译成上面标准写法
      内部处理用的是: bindActionCreators
    */
    actions.voteAction
)(VoteFooter);