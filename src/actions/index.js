import axios from 'axios';
import { INCREAMENT, DECREAMENT, FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE, LOAD_USER } from './../constans';
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
    // return dispatch => {
    //     dispatch(fetch_user_request())
    //     axios.get("https://randomuser.me/api/").then((res) => {
    //         dispatch(fetch_user(res.data.results[0]))
    //     }).catch(error => {
    //         console.log(error)
    //         dispatch(fetch_user_failure(error))
    //     })
    // }
    return {
        type: LOAD_USER,
        payload: axios.get("https://randomuser.me/api/"),
    }
}
export const fetch_user_failure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error,
    }
}
export const fetch_user = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user,
    }
}
export const fetch_user_request = (initialState) => {
    return {
        type: FETCH_USER_REQUEST,
        initialState,
    }
}