import { INITIAL_ROUND, ROUNDS } from "../../util/constants"
export const QUIZ_STATUS = {
  CORRECT: 0,
  WRONG: 1,
  CURRENT: 2,
  NONE: 3,
}
const initial_state = {}

/// fields :
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])

const initStatus = (num) => {
  var status = new Array(num).fill(QUIZ_STATUS.NONE)
  status[0] = QUIZ_STATUS.CURRENT
  console.log("Init status: ", status, num)
  return status
}
export default reducer = (state = initial_state, action) => {
  let { answerScore, round4, picked_star } = action.payload
    ? action.payload
    : {}
  let { round_idx, quiz_idx, rounds, status, scores } = state
  switch (action.type) {
    case "GET_ROUNDS":
      return {
        ...state,
        ...action.payload,
        round_idx: INITIAL_ROUND,
        quiz_idx: 0,
        status: initStatus(ROUNDS[INITIAL_ROUND].num_quiz),
        scores: [0, 0, 0, 0],
        is_guessed_round2_keyword: false,
        keyword_answered: false,
      }

    case "ANSWER_QUIZ":
      status[status.length - 1] =
        answerScore > 0 ? QUIZ_STATUS.CORRECT : QUIZ_STATUS.WRONG
      scores[round_idx] += answerScore
      status[quiz_idx] = QUIZ_STATUS.CURRENT

      let total_question = ROUNDS[round_idx].num_quiz

      if (quiz_idx < total_question - 1) {
        quiz_idx++
      }
      console.log("Quiz_idx: ", quiz_idx)
      return {
        ...state,
        quiz_idx,
        status,
        scores,
      }

    case "NEXT_ROUND":
      quiz_idx = 0
      round_idx++

      return {
        ...state,
        quiz_idx,
        round_idx,
        status: initStatus(ROUNDS[round_idx].num_quiz),
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
