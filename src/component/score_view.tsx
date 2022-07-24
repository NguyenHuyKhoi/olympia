import React from "react"
import { Text, View } from "react-native"
import { WHITE } from "../util/palette"

const ScoreView = (props: any) => {
  const { score, style } = props

  return (
    <View
      style={{
        width: 70,
        height: 50,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: WHITE,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <Text style={{ fontSize: 26, color: WHITE }}>{score}</Text>
    </View>
  )
}

export default ScoreView
