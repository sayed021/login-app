import { GET_USER, GET_USER_ASNYC, USER_ERROR, USER_LOADING, USER_SUCCESS } from "../Constants/userConstant"

export const getUser = () => {
    debugger;
    return { type: GET_USER_ASNYC }
}

export const userLoading = () => {
    return { type: USER_LOADING }
}
export const userError = () => {
    return { type: USER_ERROR }
}
export const userSuccess = (action) => {
    debugger;
    console.log("success action user ");
    return { type: USER_SUCCESS, data: action.payload.data }
}