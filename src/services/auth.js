export const TOKEN_KEY = "@SecretToken"

export const isAuthenticated = () => {
  // TODO: improve authentication validation
  return sessionStorage.getItem(TOKEN_KEY) !== null
}

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY)
}

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY)
}
