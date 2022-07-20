import React from "react"

import { Text, TouchableOpacity, ImageBackground } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import {
  GRADIENT1,
  GRADIENT2,
  GRADIENT3,
  GRADIENT4,
} from "../../../asset/image"
import { WHITE } from "../../../util/palette"
const BGs = [GRADIENT1, GRADIENT2, GRADIENT3, GRADIENT4]
const LOGOs = ["filter-1", "filter-1", "filter-1", "filter-1"]
const LevelItem = (props) => {
  const { index, name, content, open, style } = props
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...style,
      }}
    >
      <ImageBackground
        style={{
          padding: 15,
          paddingHorizontal: 20,
          flexDirection: "column",
        }}
        source={BGs[index]}
      >
        <Icon name={LOGOs[index]} size={25} color={WHITE} />
        <Text
          style={{
            fontSize: 24,
            color: WHITE,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>

        {open && (
          <Text
            style={{
              fontSize: 18,
              color: WHITE,
              marginTop: 20,
              margin: 10,
              lineHeight: 32,
            }}
          >
            {content}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default LevelItem
