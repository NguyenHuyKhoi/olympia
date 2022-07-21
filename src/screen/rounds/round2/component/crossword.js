import React from "react"

import { Text, View } from "react-native"
import { QUIZ_STATUS } from "../../../../redux/play/reducer"
import { GREEN, RED, SILVER, WHITE } from "../../../../util/palette"
import CharCell from "./char_cell"

const CrossWord = (props) => {
  const { status, content, show, style } = props
  const chars = [...content.toUpperCase()]
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {chars.map((item, index) => (
        <CharCell
          key={index + ""}
          status={QUIZ_STATUS.NONE}
          content={item}
          style={{}}
          show={false}
        />
      ))}
    </View>
  )
}

export default CrossWord
