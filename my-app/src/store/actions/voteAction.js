import * as TYPES from "../actionTypes";


const voteAction = {
    supNum() {
        return {
            type: TYPES.VOTE_SUP
        }
    },
    oppNum() {
        return {
            type: TYPES.VOTE_OPP
        }
    }
}

export default voteAction;