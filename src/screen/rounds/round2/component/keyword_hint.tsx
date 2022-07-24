//import from library
import React from "react"
import { View } from "react-native"
import Text from "../../../../component/text"
import { WHITE } from "../../../../util/palette"
import CrossWord from "./crossword"
import HintImage from "./hint_image"

const KeywordHint = (props) => {
  const { open, uri, quizzes, style, keyword, unhide } = props
  const {status, correct_answer} = keyword
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderWidth: 2,
        borderColor: WHITE,
        ...style,
      }}
    >
      <HintImage
        unhide = {unhide}
        status={quizzes.map(i => i.status)}
        style={{}}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          color: WHITE,
        }}
      >
        Từ khóa
      </Text>
      <CrossWord
        unhide = {unhide}
        {...keyword}
        style={{
          marginTop: 20,
        }}
      />
    </View>
  )
}

export default KeywordHint
