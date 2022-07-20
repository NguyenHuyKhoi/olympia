const initial_state = {
  notif: null,
  isShowKeyboard: false,
}

export default reducer = (state = initial_state, action) => {
  let { notif } = action.payload ? action.payload : {}
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notif,
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
