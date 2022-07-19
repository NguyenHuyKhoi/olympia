import React, { Component } from "react"

import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { MAX_WIDTH } from "../util/constants"
import { GREEN, WHITE } from "../util/palette"

const Button = (props) => {
  let { width, background, label } = props
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 50,
        backgroundColor: GREEN,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Text style={{ fontSize: 20, color: WHITE }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
