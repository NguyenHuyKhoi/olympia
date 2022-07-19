import { INITIAL_ROUND, ROUNDS } from "../../util/constants"
import firebase from "../../util/firebase"
import { practiceActions } from "../action_constant"
const QUIZ_STATUS = {
  CORRECT: 0,
  WRONG: 1,
  CURRENT: 2,
}
const initial_state = {}

/// fields :
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])
export default reducer = (state = initial_state, action) => {
  let { answerScore, round4, picked_star } = action.payload
    ? action.payload
    : {}
  let { round_idx, quiz_idx, rounds, status, scores } = state
  switch (action.type) {
    case "GET_PRACTICE_ROUNDS":
      return {
        ...state,
        ...payload,
        round_idx: INITIAL_ROUND,
        quiz_idx: 0,
        status: [QUIZ_STATUS.CURRENT],
        scores: [0, 0, 0, 0],
        is_guessed_round2_keyword: false,
        keyword_answered: false,
      }

    case "ANSWER":
      status[status.length - 1] = answerScore > 0 ? "correct" : "wrong"
      scores[round_idx] += answerScore
      status.push(QUIZ_STATUS.CURRENT)

      let total_question = ROUNDS[round_idx].number_question

      if (quiz_idx < total_question - 1) {
        quiz_idx++
      }
      return {
        ...state,
        quiz_idx,
        status,
        scores,
      }

    case "NEXT_ROUND":
      quiz_idx = 0
      round_idx++
      status = []
      status.push(QUIZ_STATUS.CURRENT)

      return {
        ...state,
        quiz_idx,
        round_idx,
        status,
      }

    case "ANSWER_KEYWORD":
      scores[1] += answerScore
      //move to next round :3;

      return {
        ...state,
        scores,
        keyword_answered: true,
      }

    case "CHOOSE_ROUND4_QUESTIONS":
      rounds[3] = round4

      return {
        ...state,
        rounds,
        picked_star: picked_star,
      }
    default:
      return state
  }
}
