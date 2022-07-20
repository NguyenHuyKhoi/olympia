import RealtimeDBHandler from "../../service/RealtimeDBHandler"

export const getRounds = () => {
  return async (dispatch) => {
    let rounds = await RealtimeDBHandler.getRounds()

    dispatch({
      type: "GET_ROUNDS",
      payload: { rounds },
    })
  }
}

export const answerQuiz = (answerScore) => {
  console.log("answerQuiz :", answerScore)
  return {
    type: "ANSWER_QUIZ",
    payload: { answerScore },
  }
}

export const saveResult = (result) => {
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

export const nextRound = () => {
  return {
    type: "NEXT_ROUND",
    payload: {},
  }
}

export const answerKeyword = (answerScore) => {
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
