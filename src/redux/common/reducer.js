const initial_state = {
  notif: null,
}

export default reducer = (state = initial_state, action) => {
  let { notif } = action.payload ? action.payload : {}

  console.log("Common reducer: ", notif)
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notif,
      }

    default:
      return state
  }
}
