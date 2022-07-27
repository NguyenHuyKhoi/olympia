import { Action, LibraryState } from "../types"

const initial_state: LibraryState = {
  results: [],
}
export default reducer = (state: LibraryState = initial_state, action: Action) => {
  let { result } = action.payload ? action.payload : {}

  switch (action.type) {
    case "SAVE_RESULT":
      state.results.push(result)
      return {
        ...state
      }
    default:
      return state
  }
}
