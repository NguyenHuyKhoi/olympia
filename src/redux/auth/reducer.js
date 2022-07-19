const initial_state = {
  user: null,
}

export default reducer = (state = initial_state, action) => {
  console.log("action: ", action)
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
    default:
      return state
  }
}
