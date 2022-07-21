//import from library
import React from "react"
import { Image, Text, View } from "react-native"
import Modal from "react-native-modalbox"
import { INDIGO_3, WHITE } from "../../../../util/palette"
import CrossWord from "./crossword"
import HintImage from "./hint_image"

const KeywordHint = (props) => {
  const { open, uri, status, keyword_answered, style, keyword } = props
  console.log("HintImageModal: ", uri)
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
        status={status.slice(0, 4)}
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
        content={keyword}
        show={keyword_answered}
        status={status[4]}
        style={{
          marginTop: 20,
        }}
      />
    </View>
  )
}

export default KeywordHint
