
import FirestoreHandler from "../../service/FirestoreHandler"
import { Action, User } from "../types"
interface IRetriveHistories {
  (userId: string): (dispatch: any) => Promise<void>
}

export const retrieveHistories: IRetriveHistories = (userId: string) => {
  return async (dispatch) => {
    const results = await FirestoreHandler.shared.filterByUserId('Result', userId)
    dispatch({
      type: 'RETRIEVE_HISTORIES',
      payload: {results}
    })
  }
}