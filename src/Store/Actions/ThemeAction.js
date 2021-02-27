import { SET_THEME } from "../Constants/themeConstants"

export const setTheme = themeName => {
    return { type: SET_THEME, payload: themeName }
}