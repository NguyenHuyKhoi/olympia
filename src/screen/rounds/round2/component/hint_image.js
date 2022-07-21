//import from library
import React from "react"
import { Image, ImageBackground, Text, View } from "react-native"
import Modal from "react-native-modalbox"
import { QUIZ_STATUS } from "../../../../redux/play/reducer"
import { INDIGO_3, WHITE } from "../../../../util/palette"

const HintImage = (props) => {
  const { uri, status, show, style, keyword_answered } = props
  // status = [
  //   QUIZ_STATUS.CORRECT,
  //   QUIZ_STATUS.WRONG,
  //   QUIZ_STATUS.NONE,
  //   QUIZ_STATUS.CORRECT,
  // ]
  return (
    <ImageBackground
      source={{
        uri:
          "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
      }}
      style={{
        width: 200,
        height: 200,
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {status.map((item, index) => (
        <View
          key={"" + index}
          style={{
            width: "50%",
            height: "50%",
            borderWidth: 2,
            borderColor: INDIGO_3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              keyword_answered || item == QUIZ_STATUS.CORRECT
                ? "rgba(0,0,0,0)"
                : WHITE,
            zIndex: 1,
          }}
        >
          {!keyword_answered && item !== QUIZ_STATUS.CORRECT ? (
            <Text
              style={{
                fontSize: 45,
                color: INDIGO_3,
                textAlign: "center",
              }}
            >
              {index + 1}
            </Text>
          ) : null}
        </View>
      ))}
    </ImageBackground>
  )
}

export default HintImage
