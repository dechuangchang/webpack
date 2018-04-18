const counter = (state = 0, action = {}) => {
    switch (action.type) {
        case 'IN':
        return state+1 ;
        case 'UN':
        return state-1 ;
        default: return state
    }
}
export default counter