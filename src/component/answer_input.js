import React, { useState } from "react"

import { Keyboard, TextInput, View } from "react-native"
import { INDIGO_3, WHITE } from "../util/palette"
import Button from "./button"
import { useDispatch, useSelector } from "react-redux"
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
      dispatch(onAnswer(correct))
    }, 1000)
  }

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        value={answer}
        placeholder={"Có " + correct_answer.length + " ký tự"}
        style={{
          width: "80%",
          height: 60,
          borderRadius: 20,
          backgroundColor: WHITE,
          textAlign: "center",
          color: INDIGO_3,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 35,
        }}
        onChangeText={setAnswer}
      />

      {isShowKeyboard ? null : (
        <Button onPress={onSubmit} width="80%" label="Trả lời" />
      )}

      {/* <Text style={{fontSize:18,color:this.defineColor(),fontStyle:'italic',marginTop:10}}>
                  {
                      this.defineResultText()
                  }
              </Text> */}
    </View>
  )
}

export default AnswerInput
