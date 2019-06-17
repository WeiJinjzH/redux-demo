import { INCREAMENT, DECREAMENT } from './../constans'
export const increament = (name) => {
    return {
        type: INCREAMENT,
        name,
    }
}
export const decreament = () => {
    return {
        type: DECREAMENT,
    }
}