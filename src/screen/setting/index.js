import React, { useState } from "react"

import { Text, View } from "react-native"
import Button from "../../component/button"
import Header from "../../component/header"
import InputText from "../../component/input_text"
import { GREEN, INDIGO_2, WHITE } from "../../util/palette"

import { useDispatch, useSelector } from "react-redux"
import { updateInfor } from "../../redux/auth/action"
import { validatePassword, validatePhone } from "../../util/helper"
import ToastHandler from "../../util/toast"

const SettingScreen = () => {
  const dispatch = useDispatch()
  const { isShowKeyboard } = useSelector((state) => state.common)
  const { user } = useSelector((state) => state.auth)
  const [phone, setPhone] = useState(user.phone)
  const [password, setPassword] = useState(user.password)
  const [username, setUsername] = useState(user.username)

  const onUpdate = async () => {
    var msg = null
    console.log("Input : ", phone, password)
    if ((msg = validatePhone(phone)) || (msg = validatePassword(password))) {
      ToastHandler.show({ type: "info", text1: msg })
      return
    }

    dispatch(updateInfor({ phone, password, username }))
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_2,
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      {!isShowKeyboard && <Header />}

      <Text
        style={{
          fontSize: 25,
          color: WHITE,
          fontWeight: "bold",
          marginTop: !isShowKeyboard ? 100 : 0,
          marginBottom: !isShowKeyboard ? 50 : 10,
        }}
      >
        TÀI KHOẢN
      </Text>

      <View
        style={{
          flex: 1,
        }}
      >
        <InputText
          logo="account-circle"
          label="Số điện thoại"
          value={phone}
          type="numeric"
          onChange={setPhone}
        />
        <InputText
          logo="account-circle"
          label="Tên người dùng"
          value={username}
          type="default"
          onChange={setUsername}
        />

        <InputText
          logo="https"
          label="Mật khẩu"
          value={password}
          type="default"
          onChange={setPassword}
        />
      </View>

      <Button label="LƯU" onPress={onUpdate} />
    </View>
  )
}

export default SettingScreen
