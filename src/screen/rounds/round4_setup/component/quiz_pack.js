import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import STAR1 from "../../../../resource/image/star1.png"
import STAR2 from "../../../../resource/image/star2.png"

import { ROUNDS } from "../../../../util/constants"

const levels = ROUNDS[3].levels

import { SILVER } from "../../../../util/palette"
import ScoreLevel from "./score_level"
const QuizPack = (props) => {
  const { pickedStar, index } = props
  const [level, setLevel] = useState(props.default_level)

  const pickStar = () => {
    props.pickStar()
  }

  const pickLevel = (selectedLevel) => {
    props.pickLevel(selectedLevel, level) //after level and before level
    setLevel(selectedLevel)
  }
  return (
    <View
      style={{ width: "100%", flexDirection: "column", alignItems: "center" }}
    >
      <Text style={{ fontSize: 25, color: SILVER, marginTop: 25 }}>
        {"Câu " + index}
      </Text>

      <TouchableOpacity
        onPress={pickStar}
        style={{ position: "absolute", top: 25, right: 85 }}
      >
        <Image
          source={!pickedStar ? STAR1 : STAR2}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {levels.map((item, index) => (
          <ScoreLevel
            key={"" + index}
            picked={level === index}
            score={item.score}
            onChoose={() => pickLevel(index)}
          />
        ))}
      </View>
    </View>
  )
}

export default QuizPack
