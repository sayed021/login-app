import { SET_THEME } from "../Constants/themeConstants";

export default function (state=null, action) {
    switch(action.type) {

    case SET_THEME:

        localStorage.setItem('bdBookTheme', action.payload ); 
        
        return {
            ...state,
            theme: action.payload
        };

    default:
        return state;

    }
}