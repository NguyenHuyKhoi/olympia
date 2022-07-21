import React from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { QUIZ_STATUS } from "../redux/play/reducer"
import { MAX_WIDTH } from "../util/constants"
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from "../util/palette"
export const ANSWER_STATE = {
  NORMAL: 0,
  CORRECT: 1,
  WRONG: 2,
}
const AnswerItem = (props) => {
  const { status, content, disabled, style } = props

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: "100%",
        height: 55,
        backgroundColor:
          status == ANSWER_STATE.NORMAL
            ? WHITE
            : status == ANSWER_STATE.CORRECT
            ? "#ccc604"
            : "#ed7f81",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: status == ANSWER_STATE.NORMAL ? "#425CE9" : WHITE,
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  )
}

export default AnswerItem
