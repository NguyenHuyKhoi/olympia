//import from library
import React from "react"
import { ImageBackground, View } from "react-native"
import Text from "../../../../component/text"
import { INDIGO_3, WHITE } from "../../../../util/palette"

const HintImage = (props) => {
  const { uri, status, unhide } = props
  // status = [
  //   'correct',
  //   'wrong',
  //   'none',
  //   'correct',
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
              unhide || item == "correct" ? "rgba(0,0,0,0)" : WHITE,
            zIndex: 1,
          }}
        >
          {item !== "correct" ? (
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
