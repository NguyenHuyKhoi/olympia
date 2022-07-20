import React from "react"

import { Text, View } from "react-native"
import { QUIZ_STATUS } from "../../../../redux/practice/reducer"
import { GREEN, RED, SILVER, WHITE } from "../../../../util/palette"

const Word = (props) => {
  const { status, content, show } = props
  const chars = [...content.toUpperCase()]
  const defineColor = () => {
    switch (status) {
      case QUIZ_STATUS.CORRECT:
        return GREEN
      case QUIZ_STATUS.WRONG:
        return RED
      case QUIZ_STATUS.CURRENT:
        return WHITE
      case QUIZ_STATUS.NONE:
        return SILVER
    }
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {chars.map((item, index) => (
        <View
          key={"" + index}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: show ? GREEN : defineColor(),
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 3,
            marginTop: 6,
          }}
        >
          {show || status === QUIZ_STATUS.CORRECT ? (
            <Text style={{ fontSize: 18, color: WHITE }}>{item}</Text>
          ) : null}
        </View>
      ))}
    </View>
  )
}

export default Word
