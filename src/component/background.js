import React from "react"

import { ImageBackground } from "react-native"
import { BG } from "../asset/image"
const Background = (props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
      source={BG}
    />
  )
}

export default Background
