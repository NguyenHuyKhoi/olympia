import React from "react"

import { Text, View } from "react-native"
import { MAX_WIDTH } from "../../../util/constants"
import { GRAY, INDIGO_3, SILVER } from "../../../util/palette"

const RoundItem = (props) => {
  const { score, round } = props
  return (
    <View
      style={{
        width: MAX_WIDTH,
        height: 50,
        backgroundColor: INDIGO_3,
        borderWidth: 1,
        borderColor: GRAY,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 18, color: SILVER }}>
        {"Vòng " + round.index + " :" + round.name}
      </Text>
      <Text style={{ fontSize: 18, color: SILVER }}>{score}</Text>
    </View>
  )
}

export default RoundItem
