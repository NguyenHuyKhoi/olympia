import React from "react"

import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { RESULT_BG } from "../../../asset/image"
import { WHITE } from "../../../util/palette"
import LevelItem from "./level_item"

const ResultItem = (props) => {
  const { scores, time, open } = props
  console.log("Scores: ", scores, time)
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
              fontSize: 16,
              color: WHITE,
            }}
          >
            {time}
          </Text>
          {!open && (
            <Text
              style={{
                fontSize: 24,
                color: WHITE,
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {"XEM"}
            </Text>
          )}
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
