import { Action, AuthState } from "../types"

const initial_state: AuthState = {
  user: undefined,
}
export default reducer = (state: AuthState = initial_state, action: Action) => {
  let { user } = action.payload ? action.payload : {}

  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        user,
      }
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        user,
      }
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        user: null,
      }
    case "UPDATE_INFOR":
      return {
        ...state,
        user,
      }
    default:
      return state
  }
}
