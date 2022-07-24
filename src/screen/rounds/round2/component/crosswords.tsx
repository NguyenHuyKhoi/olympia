import React from "react"

import { View } from "react-native"
import Link from "../../../../component/link"
import { Quiz } from "../../../../redux/types"
import { WHITE } from "../../../../util/palette"
import CrossWord from "./crossword"
const Crosswords = (props) => {
  const { quizzes, style, unhide } = props
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderWidth: 2,
        borderColor: WHITE,
        ...style,
      }}
    >
      {quizzes.slice(0, 4).map((item: Quiz, index) => (
        <CrossWord
          key={"" + index} 
          unhide = {unhide}
          {...item}
          style={{
            marginTop: 20,
          }}
        />
      ))}
    </View>
  )
}

export default Crosswords
