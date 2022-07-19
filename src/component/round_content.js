import React, { Component, useRef } from "react"

import { Text, StyleSheet, TextInput, View } from "react-native"
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from "../util/palette"
import ProgressBarComponent from "./progress_bar.component"
import QuestionComponent from "./question.component"
import SoundPlayer from "react-native-sound-player"
import { connect, useSelector } from "react-redux"
import * as actions from "../redux/practice/action"
import { MAX_WIDTH, ROUNDS } from "../util/constants"
import AnswersOptionComponent from "./answers_option.component"
import AnswerInputComponent from "./answers_input.component"
import CountdownTimerComponent from "./countdown_timer.component"
import { useNavigation } from "@react-navigation/native"

const RoundContent = (props) => {
  const navigation = useNavigation()
  const { duration } = props
  const { round_idx, quiz_idx, rounds } = useSelector((state) => state.practice)
  const timer = useRef(null)
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
    if (timer.current) {
      timer.current.reset()
    }

    return () => {}
  }, [])

  const answer = (correct) => {
    if (round_idx !== 0 && timer.current) timer.current.pause()
    let score = calculateScore()

    if (round_idx === 3 && picked_star === quiz_idx) {
      if (correct) score *= 2
      else score = -score
    } else if (round_idx === 2) {
      let time = timer.current ? timer.current.getTime() : 0

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
      if (props.onAnswerKeyword) {
        props.onAnswerKeyword(correct)
      }
    } else {
      props.answer(score)

      if (quiz_idx === ROUNDS[round_idx].number_question - 1) {
        if (timer.current) timer.current.pause()
        if (round_idx < 3) nextRound()
        else viewResult()
      } else if (timer.current && round_idx != 0) {
        timer.current.reset()
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
      answer(false)
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
      <CountdownTimerComponent
        ref={(ref) => (this.timer = ref)}
        round_index={cri}
        onTimeOut={() => this.onTimeOut()}
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
          {"Câu " + (cqi + 1) + "/" + questions_num}
        </Text>
      </View>
      <ProgressBarComponent states={questions_state} amount={questions_num} />

      <View style={{ flex: 5, marginTop: 20, width: MAX_WIDTH }}>
        <QuestionComponent question={question} />
      </View>

      <View style={{ flex: 4, width: "100%", marginTop: 10 }}>
        {cri !== 1 ? (
          <AnswersOptionComponent
            answers={question.answers}
            onAnswer={this.answer}
          />
        ) : (
          <AnswerInputComponent
            correct_answer={question.answer}
            onAnswer={this.answer}
          />
        )}
      </View>
    </View>
  )
}

export default RoundContent
