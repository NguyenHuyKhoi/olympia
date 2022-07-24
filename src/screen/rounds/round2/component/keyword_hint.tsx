//import from library
import React from "react"
import { Text, View } from "react-native"
import { WHITE } from "../../../../util/palette"
import CrossWord from "./crossword"
import HintImage from "./hint_image"

const KeywordHint = (props) => {
  const { open, uri, quizzes, keyword_answered, style, keyword } = props
  const {status, correct_answer} = keyword
  console.log("Keyword hint: ", keyword)
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
        status={quizzes.map(i => i.status)}
        style={{}}
        keyword_answered={keyword_answered}
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
        {...keyword}
        style={{
          marginTop: 20,
        }}
      />
    </View>
  )
}

export default KeywordHint
