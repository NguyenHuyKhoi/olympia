import React from "react"

import { View } from "react-native"
import { WHITE } from "../../../../util/palette"
import CrossWord from "./crossword"
const Crosswords = (props) => {
  const { answers, status, keyword_answered, style } = props

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
      {answers.slice(0, 4).map((item, index) => (
        <CrossWord
          key={"" + index}
          content={item}
          show={keyword_answered}
          status={status[index]}
          style={{
            marginTop: 20,
          }}
        />
      ))}
    </View>
  )
}

export default Crosswords
