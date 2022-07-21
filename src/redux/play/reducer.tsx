import { Action, PlayState } from "../types"
import { INITIAL_GAME } from "./rule"
export const QUIZ_STATUS = {
  CORRECT: 0,
  WRONG: 1,
  CURRENT: 2,
  NONE: 3,
}

const calculateScore = (correct: number, time: boolean ) => {
  return 20
}

const initial_state: PlayState = INITIAL_GAME
/// fields :
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])


export default reducer = (state: PlayState = initial_state, action: Action) => {
  let { correct, time, game } = action.payload
    ? action.payload
    : {}
  let { round_idx, quiz_idx, rounds } = state

  var round = rounds[round_idx]
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        ...game
      }

    case "ANSWER_QUIZ":
      round.status[quiz_idx] = correct ? 'correct' : 'wrong'
      round.score += calculateScore(correct, time)

      return {
        ...state
      }
    case 'NEXT_QUIZ':
      return {
        ...state,
        quiz_idx: quiz_idx + 1
      }


    case "NEXT_ROUND":
      return {
        ...state,
        quiz_idx: 0,
        round_idx: round_idx +1
      }

    case "ANSWER_KEYWORD":
      //move to next round :3;

      return {
        ...state,
      }
    default:
      return state
  }
}
