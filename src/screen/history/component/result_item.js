import React from "react"

import { FlatList, Text, View } from "react-native"
import { MAX_WIDTH, ROUNDS } from "../../../util/constants"
import { SILVER } from "../../../util/palette"
import RoundItem from "./round_item"

const ResultItem = (props) => {
  const { scores, time } = props
  let total = 0
  scores.map((item) => (total += item))
  return (
    <View
      style={{
        width: MAX_WIDTH,
        marginHorizontal: 20,
        marginTop: 15,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {time !== undefined ? (
        <Text style={{ fontSize: 18, color: SILVER }}>{time}</Text>
      ) : null}

      <TotalScore score={total} />

      <FlatList
        data={scores}
        keyExtractor={(item, index) => "" + index}
        renderItem={({ item, index }) => (
          <RoundItem round={ROUNDS[index]} score={item} />
        )}
      />
    </View>
  )
}

export default ResultItem
