import React from "react"

import { Image, Text, View } from "react-native"
import { LOGO } from "../../../../asset/image"
import CrossWord from "../../../../screen/rounds/round2/component/crossword"
import { WHITE } from "../../../../util/palette"
const QuizContent = (props) => {
  const {quiz, num_quiz, quiz_idx, isEnableKeyword} = props
  const { category, content, image, video, status, index, answer, style } = quiz
  console.log("Answer: ", answer, isEnableKeyword)
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        padding: 12,
        borderWidth: 2,
        borderColor: WHITE,
        ...style,
      }}
    >
      <Image
        source={ LOGO}
        style={{
          width: 160,
          height: 160,
          alignSelf: "center",
        }}
      />
      {
        !isEnableKeyword &&
        <Text style={{ fontSize: 16, color: WHITE, marginTop: 20 }}>
        {`Câu hỏi ${quiz_idx + 1} / ${num_quiz}  ${
          category ? "-" + category : ""
        }`}
      </Text>
      }
      
      <Text
        style={{ fontSize: 24, color: WHITE, fontWeight: "bold", marginTop: 5 }}
      >
        {content}
      </Text>
      <CrossWord
        {...quiz}
        style={{
          marginTop: 20,
          alignSelf: 'center'
        }}
    />
    </View>
  )
}

export default QuizContent
