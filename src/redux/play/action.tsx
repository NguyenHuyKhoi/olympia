import FirestoreHandler from "../../service/FirestoreHandler";
import { Action, GameResult, PlayState } from "../types";
import uuid from 'react-native-uuid'
import { createGame } from "./rule";
interface IStartGame {
  (): (dispatch: any) => Promise<void>
}

interface IAnswerQuiz {
  (correct: boolean, time: number): Action
}

interface ISaveResult {
  (user: User, result: PlayState):  (dispatch: any) => Promise<void>
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


export const saveResult: ISaveResult = (user, game) => {
  return async (dispatch) => {
    const result: GameResult = {
      scores: game.rounds.map(i => i.score),
      user_id: user.phone
    }
    await FirestoreHandler.shared.add('Result', result, uuid.v4().toString())
    dispatch({
      type: "SAVE_RESULT",
      payload: {},
    })
  }
}

export const nextRound: INextRound = () => {
  return {
    type: "NEXT_ROUND",
    payload: {},
  }
}

export const answerKeyword: IAnswerKeyword = (correct) => {
  return {
    type: "ANSWER_KEYWORD",
    payload: { correct },
  }
}