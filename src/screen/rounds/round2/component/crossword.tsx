import React from "react"

import { View } from "react-native"
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
          status={"none"}
          content={item}
          style={{}}
          show={false}
        />
      ))}
    </View>
  )
}

export default CrossWord
