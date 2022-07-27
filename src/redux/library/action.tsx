
import FirestoreHandler from "../../service/FirestoreHandler"
import { Action, GameResult, PlayState, User } from "../types"
interface IRetriveHistories {
  (userId: string): (dispatch: any) => Promise<void>
}
interface ISaveResult {
  (user: User, result: PlayState):  (dispatch: any) => Promise<void>
}

export const saveResult: ISaveResult = (user, game) => {
  return async (dispatch) => {
    const result: GameResult = {
      scores: game.rounds.map(i => i.score),
      // user_id: user.phone
    }
    //await FirestoreHandler.shared.add('Result', result, uuid.v4().toString())
    dispatch({
      type: "SAVE_RESULT",
      payload: {result},
    })
  }
}

// export const retrieveHistories: IRetriveHistories = (userId: string) => {
//   return async (dispatch) => {
//     const results = await FirestoreHandler.shared.filterByUserId('Result', userId)
//     dispatch({
//       type: 'RETRIEVE_HISTORIES',
//       payload: {results}
//     })
//   }
// }