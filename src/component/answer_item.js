import React, { Component } from "react"

import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { MAX_WIDTH } from "../util/constants"
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from "../util/palette"
import { useDispatch } from "react-redux"
import { ANSWER_STATE } from "./answer_list"
const AnswerItem = (props) => {
  const { status, content } = props

  const defineColor = () => {
    switch (status) {
      case ANSWER_STATE.NORMAL:
        return SILVER
      case ANSWER_STATE.CORRECT:
        return GREEN
      case ANSWER_STATE.WRONG:
        return RED
    }
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: MAX_WIDTH,
        height: 45,
        backgroundColor: INDIGO_3,
        borderWidth: 1,
        borderColor: defineColor(),
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 22,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 20, color: defineColor() }}>{content}</Text>

      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: defineColor(),
          backgroundColor: defineColor(),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17, color: SILVER }}>
          {status === ANSWER_STATE.NORMAL
            ? ""
            : status === ANSWER_STATE.CORRECT
            ? "v"
            : "x"}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AnswerItem
