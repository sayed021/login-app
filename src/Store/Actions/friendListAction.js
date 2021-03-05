import { FRIENDS_ERROR, FRIENDS_LIST_ASNYC, FRIENDS_LOADING, FRIENDS_SUCCESS } from "../Constants/friendListConstants"

export const getFriendLists = () => {
    return { type: FRIENDS_LIST_ASNYC }
}
export const getFriendsLoading = () => {
    return { type: FRIENDS_LOADING }
}