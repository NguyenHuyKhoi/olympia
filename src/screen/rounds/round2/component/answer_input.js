import React, { useState } from "react"

import { FlatList, TextInput, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { answerQuiz } from "../../../../redux/play/action"
import { INDIGO_3, WHITE } from "../../../../util/palette"
import Button from "../../../../component/button"
import CharPicker from "./char_picker"
import IconButton from "../../../../component/icon_button"
const AnswerInput = (props) => {
  const { correct_answer } = props
  const [answer, setAnswer] = useState("")
  const { isShowKeyboard } = useSelector((state) => state.common)
  const dispatch = useDispatch()
  const onSubmit = () => {
    //    if (this.state.answer==='') return ;
    let correct = answer.toLowerCase() === correct_answer.toLowerCase()
    setTimeout(() => {
      setAnswer("")
      dispatch(answerQuiz(correct))
    }, 1000)
  }

  const chars = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
  const onPickChar = () => {}
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
              select={index % 2 == 0}
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
        <IconButton logo="delete" color="#F25E7B" />
        <IconButton
          onPress={props.onNext}
          logo="arrow-forward"
          style={{
            flex: 1,
            marginHorizontal: 20,
          }}
        />
        <IconButton logo="send" color="#0FC599" />
      </View>
    </View>
  )
}

export default AnswerInput
