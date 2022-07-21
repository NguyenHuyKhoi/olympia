import React, { useEffect, useState, useRef } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Background from "../../../../component/background"
import QuizContent from "../../../../component/quiz_content"
import Timer from "../../../../component/timer"
import { answerKeyword, answerQuiz } from "../../../../redux/play/action"
import { ROUNDS } from "../../../../util/constants"
import AnswerInput from "./answer_input"
import Crosswords from "./crosswords"
import { remove } from "../../../../util/helper"
import { QUIZ_STATUS } from "../../../../redux/play/reducer"
import KeywordHint from "./keyword_hint"
const VIEW_TYPE = {
  QUIZ: 0,
  CROSSWORD: 1,
  KEYWORD: 2,
}
const RoundContent = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [viewType, setViewType] = useState(VIEW_TYPE.QUIZ)
  const { duration } = props
  const { round_idx, quiz_idx, rounds, status, keyword_answered } = useSelector(
    (state) => state.play
  )
  const timerRef = useRef(null)
  const calculateScore = () => {
    if (round_idx <= 2) return ROUNDS[round_idx].score
    let round4 = rounds[3]
    let q = round4[quiz_idx]
    switch (q.code) {
      case "easy":
        return ROUNDS[3].levels[0].score
      case "medium":
        return ROUNDS[3].levels[1].score
      case "hard":
        return ROUNDS[3].levels[2].score
    }
  }

  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.reset()
    }

    return () => {}
  }, [])

  const onAnswer = (correct) => {
    if (round_idx !== 0 && timerRef.current) timerRef.current.pause()
    let score = calculateScore()

    if (round_idx === 3 && picked_star === quiz_idx) {
      if (correct) score *= 2
      else score = -score
    } else if (round_idx === 2) {
      let time = timerRef.current ? timerRef.current.getTime() : 0

      console.log("GetAnswerTime :", time)
      if (!correct) score = 0
      else if (time >= 20) score = 40
      else if (time >= 15) score = 30
      else if (time > 10) score = 20
      else score = 10
    } else {
      if (correct) score = score
      else score = 0
    }

    if (round_idx === 1 && quiz_idx === 4) {
      dispatch(answerKeyword(score))
    } else {
      dispatch(answerQuiz(score))

      if (quiz_idx === ROUNDS[round_idx].num_quiz - 1) {
        if (timerRef.current) timerRef.current.pause()
        if (round_idx < 3) nextRound()
        else viewResult()
      } else if (timerRef.current && round_idx != 0) {
        timerRef.current.reset()
      }
    }
  }

  const nextRound = () => {
    navigation.navigate("result")
  }

  const viewResult = () => {
    navigation.navigate("result")
  }

  const onTimeOut = () => {
    if (round_idx === 0) {
      navigation.navigate("result")
    } else {
      onAnswer(false)
    }
  }

  const quiz = rounds[1].questions[quiz_idx]
  const uri = rounds[1].keyword.image
  const keyword = rounds[1].keyword.answer
  const num_quiz = rounds[1].questions.length
  const answers = rounds[1].questions.map((item) =>
    remove(item.answer, " ").toUpperCase()
  )

  const onNextView = () => {
    setViewType((viewType + 1) % 3)
  }
  console.log("Status: ", status)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "red",
      }}
    >
      <Background />
      <Timer
        ref={timerRef}
        round_idx={round_idx}
        onTimeOut={onTimeOut}
        duration={duration}
        style={{ marginTop: 10, alignSelf: "center" }}
      />
      {viewType == VIEW_TYPE.QUIZ ? (
        <QuizContent
          {...quiz}
          index={quiz_idx}
          num_quiz={num_quiz}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
        />
      ) : viewType == VIEW_TYPE.CROSSWORD ? (
        <Crosswords
          answers={answers}
          keyword_answered={keyword_answered}
          status={status}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
        />
      ) : (
        <KeywordHint
          status={status}
          uri={uri}
          keyword={keyword}
          keyword_answered={keyword_answered}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
        />
      )}

      <AnswerInput
        correct_answer={quiz.answer}
        onAnswer={onAnswer}
        onNext={onNextView}
      />
    </View>
  )
}

export default RoundContent
