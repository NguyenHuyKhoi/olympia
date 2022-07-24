import RealtimeDBHandler from "../../service/RealtimeDBHandler"
import { Action } from "../types"
import { createGame } from "./rule"
interface IStartGame {
  (): (dispatch: any) => Promise<void>
}

interface IAnswerQuiz {
  (correct: boolean, time: number): Action
}

interface ISaveResult {
  (result: any):  (dispatch: any) => Promise<void>
}

interface IEnableAnswerKeyword {
  (): Action
}

interface IUnpickChar {
  (): Action
}


interface INextRound {
  (): Action
}

interface INextQuiz {
  (): Action
}

interface IPickChar {
  (index: number): Action
}

interface IAnswerKeyword {
  (correct: boolean): Action
}

export const startGame: IStartGame = () => {
  return async (dispatch) => {
    let game = await createGame()

    dispatch({
      type: "START_GAME",
      payload: { game },
    })
  }
}

export const answerQuiz: IAnswerQuiz = (correct, time) => {
  console.log("answerQuiz :", correct)
  return {
    type: "ANSWER_QUIZ",
    payload: { correct, time },
  }
}

export const pickChar: IPickChar = (index) => {
  return {
    type: "PICK_CHAR",
    payload: { index },
  }
}

export const unpickChar: IUnpickChar = () => {
  return {
    type: "UN_PICK_CHAR",
    payload: {  },
  }
}

export const nextQuiz: INextQuiz = () => {
  return {
    type: "NEXT_QUIZ",
    payload: { },
  }
}

export const enableAnswerKeyword: IEnableAnswerKeyword = () => {
  return {
    type: "ENABLE_ANSWER_KEYWORD",
    payload: {},
  }
}


export const saveResult: ISaveResult = (result) => {
  return async (dispatch) => {
    dispatch({
      type: "SAVE_RESULT",
      payload: {},
    })
    // await firebaseHelper.push("/history/", {
    //   user_id: this.props.user.infor.id,
    //   scores: this.props.practice.scores,
    //   time,
    // })
  }
}

export const nextRound: INextRound = () => {
  return {
    type: "NEXT_ROUND",
    payload: {},
  }
}

export const answerKeyword: IAnswerKeyword = (correct) => {
  console.log("Answer action: ", correct)
  return {
    type: "ANSWER_KEYWORD",
    payload: { correct },
  }
}