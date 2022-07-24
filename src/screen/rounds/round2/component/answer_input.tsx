import React, { useEffect, useState } from "react"

import { FlatList, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../../component/button"
import IconButton from "../../../../component/icon_button"
import { answerKeyword, answerQuiz, enableAnswerKeyword, nextQuiz, pickChar, unpickChar } from "../../../../redux/play/action"
import CharPicker from "./char_picker"
const AnswerInput = (props) => {
  const {pickStatus, correct_answer, answer, quiz_idx, isEnableKeyword} = props
  const [isNextQuiz, setIsNextQuiz] = useState(false)
  const canAnswer = answer.length == correct_answer.length && props.status == 'current'
  const canDelete = answer.length > 0 && props.status == 'current'
  const {chars, status} = pickStatus
  const dispatch = useDispatch()

  console.log("Can answer: ", canAnswer)
  useEffect(() => {
    setIsNextQuiz(false)
  }, [quiz_idx])

  useEffect(() => {
    setIsNextQuiz(false)
  }, [isEnableKeyword])
  
  
  const onPickChar = (index) => {
    console.log("On pick char: ", index, status, correct_answer)
    if (status.length == correct_answer.length) return
    dispatch(pickChar(index))
  }

  const onUnpickChar = () => {
    dispatch(unpickChar())
  }

  const onAnswer = () => {
    console.log("Answer: ", answer, correct_answer, isEnableKeyword)
    if (isEnableKeyword) {
      dispatch(answerKeyword(answer == correct_answer))
    }
    else {
      dispatch(answerQuiz(answer == correct_answer, 0))
      setIsNextQuiz(true)
    }
  }

  const onNextQuiz = () => {
    if (quiz_idx < 3) {
      dispatch(nextQuiz())
    }
    else {
      dispatch(enableAnswerKeyword())
    }
  }

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
      }}
    >
      <FlatList
        data={chars}
        keyExtractor={(item, index) => index + ""}
        contentContainerStyle={{
          alignItems: "space-around",
        }}
        numColumns={6}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: "14%",
              aspectRatio: 1,
              marginBottom: 10,
              marginHorizontal: 5,
            }}
          >
            <CharPicker
              content={item}
              select={status.find(i => index == i)}
              onPress={() => onPickChar(index)}
            />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
        }}
      >
        <IconButton logo="delete" color="#F25E7B" onPress = {onUnpickChar}
          disabled = {!canDelete}/>
          {
            isNextQuiz ? 
            <Button
              onPress = {onNextQuiz}
              label = {quiz_idx < 3 ? 'Next quiz' : 'Answer keyword'}
              style = {{
                flex: 1,
                marginHorizontal: 20
              }}
            />
            :
            <IconButton
              onPress={props.onNext}
              logo="arrow-forward"
              style={{
                flex: 1,
                marginHorizontal: 20,
              }}
        />
          }
        
        <IconButton logo="send" color="#0FC599" onPress = {onAnswer} disabled = {!canAnswer}/>
      </View>
    </View>
  )
}

export default AnswerInput
