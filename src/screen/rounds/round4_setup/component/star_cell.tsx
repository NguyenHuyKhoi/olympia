import React from "react"

import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { WHITE } from "../../../../util/palette"
const SIZE = 55
const StarCell = (props) => {
  let { style, select } = props
  return (
    <TouchableOpacity
      style={{
        width: SIZE,
        height: SIZE,
        borderWidth: 3,
        borderColor: select ? 'yellow' : WHITE,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={props.onPress}
    >
      {select && <Icon name={"star"} size={30} color={select ? 'yellow' : WHITE} />}
    </TouchableOpacity>
  )
}

export default StarCell
