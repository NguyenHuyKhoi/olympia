import React, { useEffect, useRef } from "react"

import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { answerKeyword, answerQuiz } from "../redux/play/action"
import { MAX_WIDTH, ROUNDS } from "../util/constants"
import { shuffle } from "../util/helper"
import { INDIGO_3, SILVER } from "../util/palette"
import AnswerInput from "./answer_input"
import AnswersList from "./answer_list"
import ProgressBar from "./progress_bar"
import Question from "./question"
import Timer from "./timer"

const RoundContent = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { duration } = props
  const { round_idx, quiz_idx, rounds, status, picked_star } = useSelector(
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

      if (quiz_idx === ROUNDS[round_idx].number_question - 1) {
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

  const round = rounds[round_idx]
  let question = {}
  let questions_num = ROUNDS[round_idx].number_question

  if (round_idx === 1) {
    question = round.questions[quiz_idx]
  } else {
    question = round[quiz_idx]
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
        paddingBottom: 20,
        alignItems: "center",
      }}
    >
      <Timer
        ref={timerRef}
        round_idx={round_idx}
        onTimeOut={onTimeOut}
        duration={duration}
      />

      <View
        style={{
          width: MAX_WIDTH,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 22, color: SILVER }}>
          {"Câu " + (quiz_idx + 1) + "/" + questions_num}
        </Text>
      </View>
      <ProgressBar status={status} amount={questions_num} />

      <View style={{ flex: 5, marginTop: 20, width: MAX_WIDTH }}>
        <Question question={question} />
      </View>

      <View style={{ flex: 4, width: "100%", marginTop: 10 }}>
        {round_idx !== 1 ? (
          <AnswersList
            answers={shuffle(question.answers)}
            correct_answer={question.answers[0]}
            onAnswer={onAnswer}
            quiz_idx={quiz_idx}
          />
        ) : (
          <AnswerInput correct_answer={question.answer} onAnswer={onAnswer} />
        )}
      </View>
    </View>
  )
}

export default RoundContent
