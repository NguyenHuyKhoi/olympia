import firebase from "../../util/firebase"
import { practiceActions } from "../action_constant"

export const getPracticeRounds = () => {
  return async (dispatch) => {
    let rounds = await firebase.getPracticeRounds()

    dispatch({
      type: "GET_PRACTICE_ROUNDS",
      payload: { rounds },
    })
  }
}

export const answer = (answerScore) => {
  console.log("choose option :", answerScore)
  return {
    type: "ANSWER",
    payload: { answerScore },
  }
}

export const nextRound = () => {
  return {
    type: "NEXT_ROUND",
    payload: {},
  }
}

export const answerKeyword = (answerScore) => {
  console.log("choose option :", answerScore)
  return {
    type: "ANSWER_KEYWORD",
    payload: { answerScore },
  }
}

export const chooseRound4Questions = (arr, picked_star) => {
  return async (dispatch) => {
    let round4 = await firebase.getRound4(arr)

    dispatch({
      type: "CHOOSE_ROUND4_QUESTIONS",
      payload: { round4, picked_star },
    })
  }
}
