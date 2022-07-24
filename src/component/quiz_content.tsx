import React from "react"

import { Image, View } from "react-native"
import { LOGO } from "../asset/image"
import CrossWord from "../screen/rounds/round2/component/crossword"
import { WHITE } from "../util/palette"
import Text from "./text"
const QuizContent = (props) => {
  const { category, content, image, video, answer, index, num_quiz, style, round_idx, correct_answer } = props
  
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
        source={image ? { uri: image } : LOGO}
        style={{
          width: 160,
          height: 160,
          alignSelf: "center",
        }}
      />
      <Text style={{ fontSize: 16, color: WHITE, marginTop: 20 }}>
        {`Câu hỏi ${index + 1} / ${num_quiz}  ${
          category ? "-" + category : ""
        }`}
      </Text>
      <Text
        style={{ fontSize: 24, color: WHITE, fontWeight: "bold", marginTop: 5 }}
      >
        {content}
      </Text>
      {/* {video !== undefined ? (
          <View
            style={{
              width: MAX_WIDTH + 20,
              height: content !== undefined ? 240 : 250,
            }}
          >
            <Video
              source={{ uri: video }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        ) : null} */}
    </View>
  )
}

export default QuizContent
