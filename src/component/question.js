import React from "react"

import { Image, Text, View } from "react-native"
import Video from "react-native-video"
import { MAX_WIDTH } from "../util/constants"
import { SILVER } from "../util/palette"

const Question = (props) => {
  const { category, content, image, video } = props
  return (
    <View style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      {category !== undefined ? (
        <Text style={{ fontSize: 15, fontStyle: "italic", color: SILVER }}>
          {category}
        </Text>
      ) : null}
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        {content !== undefined && content !== "" ? (
          <Text style={{ fontSize: 18, color: SILVER }}>{content}</Text>
        ) : null}

        {image !== undefined ? (
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: MAX_WIDTH + 20,
              height: content !== undefined ? 240 : 250,
              resizeMode: "stretch",
            }}
          />
        ) : null}

        {video !== undefined ? (
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
        ) : null}
      </View>
    </View>
  )
}

export default Question
