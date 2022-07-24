import React from "react"
import { TouchableOpacity } from "react-native"
import Text from "../../../../component/text"



import { GREEN, INDIGO_2, SILVER } from "../../../../util/palette"
const ScoreLevel = (props) => {
  const { picked, score } = props
  return (
    <TouchableOpacity
      onPress={props.onChoose}
      style={{
        width: 90,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: !picked ? INDIGO_2 : GREEN,
      }}
    >
      <Text style={{ fontSize: 20, color: SILVER }}>{score}</Text>
    </TouchableOpacity>
  )
}

export default ScoreLevel
