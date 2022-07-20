import React from "react"

import { FlatList, Text, View } from "react-native"
import { ROUNDS } from "../../util/constants"
import { INDIGO_3, SILVER } from "../../util/palette"
import GuideItem from "./component/guide.item"

const GuideScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: SILVER,
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        LUẬT CHƠI
      </Text>

      <TotalScore score={480} />

      <FlatList
        data={ROUNDS}
        horizontal
        keyExtractor={(item, index) => "" + index}
        renderItem={({ item }) => <GuideItem round={item} />}
      />
    </View>
  )
}

export default GuideScreen
