//import from library
import React from "react"
import { Image, Text, View } from "react-native"
import Modal from "react-native-modalbox"
import { INDIGO_3, WHITE } from "../../../../util/palette"

const HintImageModal = (props) => {
  const { open, uri, status, keyword_answered } = props
  console.log("HintImageModal: ", status)
  return (
    <Modal
      position="center"
      backdrop={true}
      style={{ width: "85%", height: 180, borderRadius: 5 }}
      isOpen={open}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 1,
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
                  keyword_answered || item === "correct"
                    ? "rgba(0,0,0,0)"
                    : WHITE,
                zIndex: 1,
              }}
            >
              {!keyword_answered && item !== "correct" ? (
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
        </View>
        <Image source={{ uri }} style={{ flex: 1, resizeMode: "stretch" }} />
      </View>
    </Modal>
  )
}

export default HintImageModal
