import React from "react"

import { Image, View } from "react-native"

import { useSelector } from "react-redux"

import RoundContent from "../../../component/round_content"
import { ROUNDS } from "../../../util/constants"
import STAR2 from "../../../resource/image/star2.png"
const Round4Screen = () => {
  const { quiz_idx, picked_star } = useSelector((state) => state.play)
  return (
    <View style={{ flex: 1 }}>
      <RoundContent duration={ROUNDS[3].time} />
      {quiz_idx === picked_star ? (
        <Image
          source={STAR2}
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            top: 65,
            right: 20,
          }}
        />
      ) : null}
    </View>
  )
}

export default Round4Screen
