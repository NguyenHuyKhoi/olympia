import React from "react"
import { ImageBackground, Text, TouchableOpacity } from "react-native"

import Icon from "react-native-vector-icons/MaterialIcons"
import { GRADIENT1, GRADIENT2, GRADIENT3 } from "../../../../asset/image"
import { WHITE } from "../../../../util/palette"

const BGs = [GRADIENT1, GRADIENT2, GRADIENT3]
const LOGOs = ["filter-1", "filter-2", "filter-3"]
const QuizPack = (props) => {
  const { index, scores, style, selectedIndex } = props

  const totalScore = scores.reduce((sum, num) => (sum += num), 0)
  const content = scores.reduce(
    (str, num, index) => (str += (index ? "-" : "") + num),
    ""
  )
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor:
          selectedIndex != null && selectedIndex != index
            ? "#CDCDCD"
            : "rgba(0,0,0,0)",
        ...style,
      }}
    >
      <ImageBackground
        style={{
          padding: 10,
          paddingHorizontal: 15,
          flexDirection: "column",
        }}
        source={
          selectedIndex == null || selectedIndex == index ? BGs[index] : null
        }
      >
        <Icon
          name={
            selectedIndex == null
              ? LOGOs[index]
              : selectedIndex == index
              ? "check-box"
              : "cancel"
          }
          size={30}
          color={WHITE}
        />
        <Text
          style={{
            fontSize: 20,
            color: WHITE,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {"Gói " + totalScore}
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: WHITE,
            fontWeight: "bold",
          }}
        >
          {content}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default QuizPack
