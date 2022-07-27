import React, { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { INDIGO_3, WHITE } from "../../util/palette"

import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import Background from "../../component/background"
import SmallHeader from "../../component/small_header"
import { retrieveHistories } from "../../redux/library/action"
import ResultItem from "../history/component/result_item"
import Text from "../../component/text"
const GAMES = [
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
]

const HistoryScreen = () => {
  const [viewIndex, setViewIndex] = useState(null)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const {results} = useSelector((state) => state.library)

  const onSelectItem = (index) => {
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
        backgroundColor: INDIGO_3,
        flexDirection: "column",
      }}
    >
      <Background />
      <SmallHeader style={{ marginTop: 30, alignSelf: "center" }} />
      {results.length == 0 ? (
        <Text
          style={{
            fontSize: 30,
            color: WHITE,
            alignSelf: "center",
            marginTop: 250,
          }}
        >
          Không có lịch sử chơi
        </Text>
      ) : (
        <FlatList
          data={results}
          style={{
            padding: 30,
          }}
          keyExtractor={(item, index) => "" + index}
          renderItem={({ item, index }) => (
            <ResultItem
              {...item}
              open={index == viewIndex}
              onPress={() => onSelectItem(index)}
            />
          )}
        />
      )}
    </View>
  )
}

export default HistoryScreen
