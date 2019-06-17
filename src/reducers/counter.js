const counter = (state = 0, action = {}) => {
    switch(action.type) {
        case 'INCREAMENT':
            console.log(action.name)
            return state + 1;
        case 'DECREAMENT':
            return state - 1;
        default: return state;
    }
}
export default counter