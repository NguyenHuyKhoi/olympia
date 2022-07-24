import React from "react"

import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native"
import { RESULT_BG } from "../../../asset/image"
import Text from "../../../component/text"
import { WHITE } from "../../../util/palette"
import LevelItem from "./level_item"

const ResultItem = (props) => {
  const { scores, open } = props
  let total = 0
  scores.map((item) => (total += item))
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        marginBottom: 30,
        margin: 10,
      }}
    >
      <ImageBackground
        style={{
          padding: 15,
          paddingHorizontal: 20,
          flexDirection: "column",
          alignItems: "center",
        }}
        source={RESULT_BG}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: WHITE,
            }}
          >
            {'Tổng điểm'}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: WHITE,
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            {open ? "Thu gọn" : "Xem"}
          </Text>
          
        </View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: WHITE,
            marginTop: 2,
            textAlign: "center",
          }}
        >
          {total}
        </Text>
        {open && (
          <FlatList
            data={scores}
            numColumns={2}
            keyExtractor={(item, index) => index + ""}
            renderItem={({ item, index }) => (
              <LevelItem
                score={item}
                index={index}
                style={{
                  margin: 10,
                }}
              />
            )}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ResultItem
