import axios from 'axios';
import { INCREAMENT, DECREAMENT, FETCH_USER_SUCCESS } from './../constans';
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
export const get_user = () => {
    return dispatch => {
        axios.get("https://randomuser.me/api/").then((res) => {
            dispatch(fetch_user(res.data.results[0]))
        }).catch(error => {
            console.log(error)
        })
    }
}
export const fetch_user = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user,
    }
}