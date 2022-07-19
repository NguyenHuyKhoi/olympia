import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { signout } from "../redux/auth/action"
import { SILVER } from "../util/palette"

const Footer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigation.navigate("signin")
    }
  }, [user])

  const onSignOut = () => {
    dispatch(signout())
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 20,
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={onSignOut}>
        <Text style={{ fontSize: 17, color: SILVER }}>Đăng xuất</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("setting_account")}>
        <Text style={{ fontSize: 17, color: SILVER }}>Cài đặt</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
