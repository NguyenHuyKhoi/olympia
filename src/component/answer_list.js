import React, { useEffect, useState } from "react"

import { FlatList, View } from "react-native"
import { useDispatch } from "react-redux"
import AnswerItem, { ANSWER_STATE } from "./answer_item"

const AnswerList = (props) => {
  const dispatch = useDispatch()
  const [isAnswered, setIsAnswered] = useState(false)
  const [answerIndex, setAnswerIndex] = useState(null)
  var { answers, quiz_idx, correct_index, style } = props

  console.log("Quiz_idx: ", quiz_idx)
  useEffect(() => {
    setIsAnswered(false)
    setAnswerIndex(null)
    console.log("Reset is answered")
  }, [quiz_idx])

  const onSelectItem = (index) => {
    setIsAnswered(true)
    setAnswerIndex(index)
    props.onAnswer(index == correct_index)
  }

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        ...style,
      }}
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
                : index == correct_index
                ? ANSWER_STATE.CORRECT
                : index == answerIndex
                ? ANSWER_STATE.WRONG
                : ANSWER_STATE.NORMAL
            }
            style={{
              marginBottom: index == answers.length - 1 ? 0 : 20,
            }}
            onPress={() => onSelectItem(index)}
          />
        )}
      />
    </View>
  )
}

export default AnswerList
