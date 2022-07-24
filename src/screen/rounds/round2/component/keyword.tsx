import React from "react"

import { View } from "react-native"
import Text from "../../../../component/text"
import { GREEN, SILVER, WHITE } from "../../../../util/palette"
const Keyword = (props) => {
  const { content, show } = props
  const chars = [...content]

  return (
    <View style={{ flexDirection: "row", marginBottom: 20, flexWrap: "wrap" }}>
      {chars.map((item, index) => (
        <View
          key={"" + index}
          style={{
            width: 26,
            height: 26,
            borderRadius: 5,
            backgroundColor: show ? GREEN : SILVER,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 4,
            marginTop: 6,
          }}
        >
          {show ? (
            <Text style={{ fontSize: 18, color: WHITE }}>{item}</Text>
          ) : null}
        </View>
      ))}
    </View>
  )
}

export default Keyword
