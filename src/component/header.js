import React from "react"

import { Image, Text, View } from "react-native"
import { LOGO } from "../resource/image"
import { APP_NAME } from "../util/constants"
import { SILVER } from "../util/palette"

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        padding: 20,
      }}
    >
      <Image
        source={LOGO}
        resizeMethod="resize"
        style={{ width: 60, height: 60 }}
      />
      <Text style={{ fontSize: 22, color: SILVER, fontWeight: "bold" }}>
        {APP_NAME}
      </Text>
      <Image
        source={LOGO}
        resizeMethod="resize"
        style={{ width: 60, height: 60 }}
      />
    </View>
  )
}

export default Header
