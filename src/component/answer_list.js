import React, { useState, useEffect } from "react"

import { View, FlatList } from "react-native"
import { shuffle } from "../util/helper"
import AnswerItem from "./answer_item"
import { useDispatch } from "react-redux"
import { answerQuiz } from "../redux/practice/action"

export const ANSWER_STATE = {
  NORMAL: 0,
  CORRECT: 1,
  WRONG: 2,
}

const AnswerList = (props) => {
  const dispatch = useDispatch()
  const [isAnswered, setIsAnswered] = useState(false)
  var { answers, quiz_idx, correct_answer } = props

  console.log("Quiz_idx: ", quiz_idx)
  useEffect(() => {
    setIsAnswered(false)
    console.log("Reset is answered")
  }, [quiz_idx])

  const onSelectItem = (correct) => {
    setIsAnswered(true)
    setTimeout(() => {
      props.onAnswer(correct)
    }, 500)
  }

  return (
    <View
      style={{ width: "100%", flexDirection: "column", alignItems: "center" }}
    >
      <FlatList
        data={answers}
        keyExtractor={(item, index) => "" + index}
        renderItem={({ item, index }) => (
          <AnswerItem
            content={item}
            key={"" + index}
            status={
              !isAnswered
                ? ANSWER_STATE.NORMAL
                : item == correct_answer
                ? ANSWER_STATE.CORRECT
                : ANSWER_STATE.WRONG
            }
            onPress={() => onSelectItem(item === correct_answer)}
          />
        )}
      />
    </View>
  )
}

export default AnswerList
