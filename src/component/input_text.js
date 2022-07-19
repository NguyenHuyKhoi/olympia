import React, { Component } from "react"

import { Text, StyleSheet, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { MAX_WIDTH } from "../util/constants"
import { INDIGO_1, WHITE } from "../util/palette"

const InputText = (props) => {
  const { type, value, label, logo } = props
  return (
    <View
      style={{
        width: MAX_WIDTH,
        height: 50,
        backgroundColor: INDIGO_1,
        borderWidth: 1,
        borderColor: WHITE,
        flexDirection: "row",
        borderRadius: 25,
        alignItems: "center",
        paddingHorizontal: 15,
        // paddingVertical:7,
        marginTop: 20,
      }}
    >
      <Icon name={logo} size={30} color={WHITE} />
      <TextInput
        keyboardType={type}
        placeholder={label}
        value={value}
        placeholderTextColor={WHITE}
        onChangeText={(value) => {
          console.log("ON change : ", value)
          if (props.onChange) props.onChange(value)
        }}
        style={{ flex: 1, marginLeft: 20, fontSize: 17, color: WHITE }}
      />
    </View>
  )
}

export default InputText
