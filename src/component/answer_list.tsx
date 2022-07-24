import React, { useEffect, useState } from "react"

import { FlatList, View } from "react-native"
import { useDispatch } from "react-redux"
import { answerQuiz } from "../redux/play/action"
import AnswerItem, { ANSWER_STATE } from "./answer_item"

const AnswerList = (props: any) => {
  const dispatch = useDispatch()
  const [isAnswered, setIsAnswered] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  var { answers, quiz_idx, correct_answer, style } = props

  console.log("Quiz_idx: ", quiz_idx)
  useEffect(() => {
    setIsAnswered(false)
    setUserAnswer('')
  }, [quiz_idx])

  const onSelectItem = (answer: string) => {
    setIsAnswered(true)
    setUserAnswer(answer)
    dispatch(answerQuiz(answer == correct_answer, 0))
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
                : item == correct_answer
                ? ANSWER_STATE.CORRECT
                : item == userAnswer
                ? ANSWER_STATE.WRONG
                : ANSWER_STATE.NORMAL
            }
            disabled = {userAnswer != ''}
            style={{
              marginBottom: index == answers.length - 1 ? 0 : 20,
            }}
            onPress={() => onSelectItem(item)}
          />
        )}
      />
    </View>
  )
}

export default AnswerList
