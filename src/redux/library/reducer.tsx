import { Action, LibraryState } from "../types"

const initial_state: LibraryState = {
  results: [],
}
export default reducer = (state: LibraryState = initial_state, action: Action) => {
  let { results } = action.payload ? action.payload : {}

  switch (action.type) {
    case "RETRIEVE_HISTORIES":
      return {
        ...state,
        results,
      }
    default:
      return state
  }
}
