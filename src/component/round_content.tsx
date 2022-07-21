import React, { useEffect, useRef } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { nextQuiz } from "../redux/play/action"
import AnswersList from "./answer_list"

import { PlayState, Round } from "../redux/types"
import Background from "./background"
import IconButton from "./icon_button"
import QuizContent from "./quiz_content"
import Timer from "./timer"
const RoundContent = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { round_idx, quiz_idx, rounds } = useSelector<any, PlayState>(
    (state) => state.play
  )
  const round: Round = rounds[round_idx]
  const quiz = round.quizzes[quiz_idx]

  const {num_quiz} = round
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

  const onNextQuiz = () => {
    if (quiz_idx < num_quiz - 1) {
      dispatch(nextQuiz())
    }
    else {
      navigation.navigate('result')
    }
  }

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
        duration={0}
        style={{ marginTop: 10, alignSelf: "center" }}
      />
      <QuizContent
        {...quiz}
        index={quiz_idx}
        num_quiz={num_quiz}
        style={{
          marginVertical: 20,
          flex: 1,
        }}
      />
      <IconButton
        logo={"arrow-forward"}
        onPress={onNextQuiz}
        style={{ marginBottom: 20, alignSelf: "center" }}
      />

      <AnswersList
        {...quiz}
        quiz_idx={quiz_idx}
        style={{ paddingHorizontal: 20 }}
      />
    </View>
  )
}

export default RoundContent
