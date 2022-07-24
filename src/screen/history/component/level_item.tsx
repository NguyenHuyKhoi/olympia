import React from "react"

import {View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Text from "../../../component/text"
import { WHITE } from "../../../util/palette"
const ICON_NAMES = ["filter-1", "filter-2", "filter-3", "filter-4"]

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
