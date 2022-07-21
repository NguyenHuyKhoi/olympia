import React, { useEffect, useRef, useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Background from "../../../../component/background"
import QuizContent from "../../../../component/quiz_content"
import Timer from "../../../../component/timer"
import { remove } from "../../../../util/helper"
import AnswerInput from "./answer_input"
import Crosswords from "./crosswords"
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

  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.reset()
    }

    return () => {}
  }, [])

  const nextRound = () => {
    navigation.navigate("result")
  }

  const viewResult = () => {
    navigation.navigate("result")
  }

  const onTimeOut = () => {
    // if (round_idx === 0) {
    //   navigation.navigate("result")
    // } else {
    //   onAnswer(false)
    // }
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
