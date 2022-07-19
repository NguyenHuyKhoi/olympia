import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { signout } from "../redux/auth/action"
import { GREEN, SILVER, WHITE } from "../util/palette"

const TabItem = (props) => {
  const { label, selected } = props
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        borderColor: selected ? GREEN : WHITE,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 17, color: SILVER }}>{label}</Text>
    </TouchableOpacity>
  )
}

const Footer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (!user) {
      navigation.navigate("signin")
    }
  }, [user])

  const onSelectMode = (index) => {
    setIndex(index)
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
      }}
    >
      <TabItem
        label="Luyen tap"
        onPress={() => onSelectMode(0)}
        selected={index == 0}
      />
      <TabItem
        label="Thi dau"
        onPress={() => onSelectMode(1)}
        selected={index == 1}
      />
    </View>
  )
}

export default Footer
