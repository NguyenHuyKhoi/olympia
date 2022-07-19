import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { INDIGO_3, SILVER } from "../../util/palette"

import { useSelector } from "react-redux"

import FirestoreHandler from "../../db/FirestoreHandler"
import ResultItem from "../history/component/result_item"
import Footer from "../../component/footer"
const GAMES = [
  {
    time: "16-07-2012",
    scores: [1, 2, 3, 4],
  },
]
const HistoryScreen = () => {
  const [games, setGames] = useState([])
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    const getResults = async () => {
      let games = await FirestoreHandler.getCollection("Game")
      games = games.filter((item) => item.user_id == user.phone)
      setGames(GAMES)
    }
    getResults()
  }, [])

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
        LỊCH SỬ
      </Text>
      {games.length == 0 ? (
        <Text
          style={{
            fontSize: 25,
            color: SILVER,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Khong co lich su
        </Text>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item, index) => "" + index}
          renderItem={({ item }) => <ResultItem {...item} />}
        />
      )}
      <Footer />
    </View>
  )
}

export default HistoryScreen
