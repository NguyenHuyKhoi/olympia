import { Action, CommonState } from "../types"
const initial_state: CommonState = {
  notification: undefined,
  isShowKeyboard: false,
}

export default reducer = (state: CommonState = initial_state, action: Action) => {
  let { notification } = action.payload ? action.payload : {}
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification,
      }
    case "SHOW_KEYBOARD": {
      return {
        ...state,
        isShowKeyboard: true,
      }
    }
    case "HIDE_KEYBOARD": {
      return {
        ...state,
        isShowKeyboard: false,
      }
    }
    default:
      return state
  }
}
