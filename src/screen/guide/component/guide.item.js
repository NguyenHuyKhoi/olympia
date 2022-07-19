import React from "react"

import { Text, View } from "react-native"
import { MAX_WIDTH } from "../../../util/constants"
import { SILVER } from "../../../util/palette"
import RoundItem from "../../history/component/round_item"

const GuideItem = (props) => {
  const { round } = props
  return (
    <View
      style={{
        width: MAX_WIDTH,
        marginHorizontal: 20,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RoundItem round={round} score={round.max_score} />
      <Text
        style={{ fontSize: 18, color: SILVER, marginTop: 15, lineHeight: 25 }}
      >
        {round.rule}
      </Text>
    </View>
  )
}

export default GuideItem
