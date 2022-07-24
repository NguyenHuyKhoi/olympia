import React from "react"

import { View } from "react-native"
import CharCell from "./char_cell"

const CrossWord = (props) => {
  var { answer, correct_answer, show, style, status } = props
  console.log("Crossword: ", answer, status)
  while (answer.length < correct_answer.length) {answer += ' '}
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {answer.split('').map((item, index) => (
        <CharCell
          key={index + ""}
          status={status}
          content={item}
          style={{}}
        />
      ))}
    </View>
  )
}

export default CrossWord
