import { Action, PlayState, Quiz } from "../types"
import { INITIAL_GAME } from "./logic"
export const QUIZ_STATUS = {
  CORRECT: 0,
  WRONG: 1,
  CURRENT: 2,
  NONE: 3,
}

const calculateScore = (quiz: Quiz, correct: boolean ) => {
  if (!correct) return 0
  return quiz.score
}

const calculateKeywordScore = (quiz: Quiz, correct: boolean) => {
  if (!correct) return 0
  return quiz.score
}

const initial_state: PlayState = INITIAL_GAME
/// fields :
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])

const getCurrentAnswer = (quiz: Quiz) => {
  var {pickStatus, correct_answer} = quiz
  var result = pickStatus?.status.reduce((s, a) => s += pickStatus?.chars[a], '')
  return result
}

export default reducer = (state: PlayState = initial_state, action: Action) => {
  let { correct, time, game, index } = action.payload
    ? action.payload
    : {}
  let { round_idx, quiz_idx, rounds, score } = state

  var round = rounds[round_idx]
  var earnedScore
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        ...game
      }

    case "ANSWER_QUIZ":
      round.quizzes[quiz_idx].status = correct ? 'correct' : 'wrong'
      earnedScore = calculateScore(round.quizzes[quiz_idx], correct)
      round.score += earnedScore
      return {
        ...state,
        score: score + earnedScore
      }
    case 'NEXT_QUIZ':
      round.quizzes[quiz_idx+1].status = 'current'
      return {
        ...state,
        quiz_idx: quiz_idx + 1
    }
    case 'ENABLE_ANSWER_KEYWORD': 
      round.keyword.status = 'current'
      return {
        ...state
      }
    case 'PICK_CHAR':
      if (round_idx == 1 && round.keyword?.status == 'current') {
        round.keyword.pickStatus.status.push(index)
        round.keyword.answer = getCurrentAnswer(round.keyword)
      } 
      else {
        round.quizzes[quiz_idx].pickStatus?.status?.push(index)
        round.quizzes[quiz_idx].answer = getCurrentAnswer(round.quizzes[quiz_idx])
      }
      return {
        ...state
      }
  
    case 'UN_PICK_CHAR':
      if (round_idx == 1 && round.keyword?.status == 'current') {
        console.log("Keyword: ", round.keyword.pickStatus)
        round.keyword.pickStatus.status.pop()
        round.keyword.answer = getCurrentAnswer(round.keyword)
      }
      else {
        round.quizzes[quiz_idx].pickStatus?.status?.pop()
        round.quizzes[quiz_idx].answer = getCurrentAnswer(round.quizzes[quiz_idx])
      }
      return {
        ...state
      }
    

    case "NEXT_ROUND":
      rounds[round_idx+1].quizzes[0].status = 'current'
      return {
        ...state,
        quiz_idx: 0,
        round_idx: round_idx +1
      }

    case "ANSWER_KEYWORD":
      round.keyword.status = correct ? 'correct' : 'wrong'
      earnedScore = calculateKeywordScore(round.keyword, correct)
      round.score += earnedScore
      return {
        ...state,
        score: score + earnedScore
      }
    default:
      return state
  }
}
