import React, { Component } from "react"
import SoundPlayer from "react-native-sound-player"
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native"
import Button from "../../../component/button"

import STAR1 from "../../resource/image/star1.png"
import STAR2 from "../../resource/image/star2.png"
import { connect } from "react-redux"
import * as actions from "../../../redux/practice/action"

import { ROUNDS } from "../../../util/constants"

const levels = ROUNDS[3].levels

import {
  SILVER,
  INDIGO_3,
  GRAY,
  GREEN,
  INDIGO_2,
  WHITE,
} from "../../../util/palette"
const ScoreLevel = (props) => {
  const { picked, score } = props
  return (
    <TouchableOpacity
      onPress={props.onChoose}
      style={{
        width: 90,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: !picked ? INDIGO_2 : GREEN,
      }}
    >
      <Text style={{ fontSize: 20, color: SILVER }}>{score}</Text>
    </TouchableOpacity>
  )
}

export default ScoreLevel
