import React, { useState } from "react"

import { FlatList, View } from "react-native"
import Background from "../../component/background"
import SmallHeader from "../../component/small_header"
import { ROUNDS } from "../../util/constants"
import LevelItem from "./component/level.item"

const GuideScreen = () => {
  const [viewIndex, setViewIndex] = useState(null)
  const onSelectItem = (index) => {
    console.log("Select: ", index)
    if (viewIndex == index) {
      setViewIndex(null)
    } else {
      setViewIndex(index)
    }
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Background />
      <SmallHeader style={{ marginTop: 30 }} />
      <FlatList
        data={ROUNDS}
        style={{ marginTop: 50 }}
        keyExtractor={(item, index) => "" + index}
        renderItem={({ item, index }) => (
          <LevelItem
            {...item}
            style={{
              marginHorizontal: 30,
              marginBottom: 20,
            }}
            open={index == viewIndex}
            onPress={() => onSelectItem(index)}
          />
        )}
      />
    </View>
  )
}

export default GuideScreen
