import React from "react"

import { View } from "react-native"

import { INDIGO_3 } from "../../../util/palette"
import RoundContent from "./component/round_content"

const Round2Screen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: INDIGO_3 }}>
      <RoundContent/>
    </View>
  )
}

export default Round2Screen
