import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { INDIGO_3, SILVER, WHITE } from "../../util/palette"

import { useSelector } from "react-redux"

import FirestoreHandler from "../../service/FirestoreHandler"
import ResultItem from "../history/component/result_item"
import SmallHeader from "../../component/small_header"
import Background from "../../component/background"
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
  const [games, setGames] = useState([])
  const [viewIndex, setViewIndex] = useState(null)
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    const getResults = async () => {
      let games = await FirestoreHandler.getCollection("Game")
      games = games.filter((item) => item.user_id == user.phone)
      setGames(GAMES)
    }
    getResults()
  }, [])

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
      {games.length == 0 ? (
        <Text
          style={{
            fontSize: 40,
            color: WHITE,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 250,
          }}
        >
          Khong co lich su
        </Text>
      ) : (
        <FlatList
          data={games}
          style={{
            padding: 30,
          }}
          keyExtractor={(item, index) => "" + index}
          renderItem={({ item, index }) => (
            <ResultItem
              {...item}
              index={index}
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
