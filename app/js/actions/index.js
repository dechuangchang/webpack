import { IN, UN, GETUSER } from '../constants/index';

export const oIN = (otype) => {
    // console.log(otype)
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: IN,
                otype
            })
        }, 1000)
    }
}
export const oUN = (otype) => {
    return {
        type: UN,
        otype
    }
}

export const getUser = () => {
    // return dispatch => (
    //     dispatch({
    //         type:GETUSER,
    //         email:'获取中...'
    //     }),
    //     axios.get(
    //         "https://randomuser.me/acpi/"
    //     ).then(rep=>{
    //         dispatch({
    //             type:GETUSER,
    //             email:rep.data.results[0].email
    //         })
    //     })
    //     .catch((error)=>{
    //         dispatch({
    //             type:GETUSER,
    //             email:error.response.data
    //         })
    //     })
    // )
    return {
        type:GETUSER,
        payload: axios.get("https://randomuser.me/api/")
    }
}