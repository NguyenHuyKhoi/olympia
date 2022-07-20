import React from "react"

import { Image, Text, View } from "react-native"
import { LOGO } from "../asset/image"
import { APP_NAME } from "../util/constants"
import { WHITE } from "../util/palette"

const SmallHeader = (props) => {
  const { style } = props
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <Image
        source={LOGO}
        resizeMethod="resize"
        style={{ width: 75, height: 75 }}
      />
      <Text style={{ fontSize: 22, color: WHITE, fontWeight: "bold" }}>
        {APP_NAME}
      </Text>
    </View>
  )
}

export default SmallHeader
