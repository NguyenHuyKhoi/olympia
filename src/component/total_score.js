import React from "react"

import { Text, View } from "react-native"
import { SILVER } from "../util/palette"

const TotalScore = (props) => {
  const { score } = props
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Text style={{ fontSize: 20, color: SILVER, marginLeft: 30 }}>Tổng</Text>
      <Text style={{ fontSize: 20, color: SILVER, marginRight: 30 }}>
        {score}
      </Text>
    </View>
  )
}
