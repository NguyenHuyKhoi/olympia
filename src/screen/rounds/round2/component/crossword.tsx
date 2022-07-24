import React from "react"

import { View } from "react-native"
import CharCell from "./char_cell"

const CrossWord = (props) => {
  var { answer, correct_answer, unhide, style, status } = props
  while (answer.length < correct_answer.length) {answer += ' '}
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {(unhide ? correct_answer : answer).split('').map((item, index) => (
        <CharCell
          key={index + ""}
          unhide = {unhide}
          status={status}
          content={ item}
          style={{}}
        />
      ))}
    </View>
  )
}

export default CrossWord
