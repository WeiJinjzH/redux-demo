import { INCREAMENT, DECREAMENT } from './../constans'
export const increament = (name) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: INCREAMENT,
            })
        }, 2000)
    }
}
export const decreament = () => {
    return {
        type: DECREAMENT,
    }
}