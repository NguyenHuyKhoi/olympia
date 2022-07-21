import React from "react"

import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { WHITE } from "../../../util/palette"
const ICON_NAMES = ["https", "https", "https", "https"]

const LevelItem = (props) => {
  const { score, index, style } = props
  return (
    <View
      style={{
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(254,254,254,0.3)",
        width: 100,
        aspectRatio: 1,
        ...style,
      }}
    >
      <Icon name={ICON_NAMES[index]} color={WHITE} size={30} />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: WHITE,
          marginTop: 5,
        }}
      >
        {score}
      </Text>
    </View>
  )
}

export default LevelItem
