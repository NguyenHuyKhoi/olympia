import React, { useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../component/button"
import InputText from "../../component/input_text"
import { INDIGO_2 } from "../../util/palette"

import Background from "../../component/background"
import BigHeader from "../../component/big_header"
import Link from "../../component/link"
import { signUp } from "../../redux/auth/action"
import { validatePassword, validatePhone } from "../../util/helper"
import ToastHandler from "../../util/toast"
const SignupScreen = () => {
  const { isShowKeyboard } = useSelector((state) => state.common)
  const navigation = useNavigation()
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const onSignUp = () => {
    var msg = null
    console.log("Input : ", phone, password)
    if ((msg = validatePhone(phone)) || (msg = validatePassword(password))) {
      ToastHandler.show({ type: "info", text1: msg })
      return
    }

    dispatch(signUp({ phone, password }))
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_2,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Background />
      <BigHeader
        style={{
          marginTop: 120,
        }}
      />
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <InputText
          placeholder="Số điện thoại"
          type="numeric"
          value={phone}
          maxLength={10}
          onChange={setPhone}
        />
        <InputText
          placeholder="Mật khẩu"
          type="numeric"
          value={password}
          secure={true}
          maxLength={6}
          style={{ marginTop: 20 }}
          onChange={setPassword}
        />
      </View>
      {!isShowKeyboard && (
        <>
          <Button label="ĐĂNG KÝ" onPress={onSignUp} />
          <Link
            style={{
              marginVertical: 20,
            }}
            onPress={() => {
              navigation.navigate("signin")
            }}
            label={"Đăng nhập"}
          />
        </>
      )}
    </View>
  )
}

export default SignupScreen
