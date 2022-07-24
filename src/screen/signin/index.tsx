import React, { useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import Background from "../../component/background"
import BigHeader from "../../component/big_header"
import Button from "../../component/button"
import InputText from "../../component/input_text"
import Link from "../../component/link"
import { signIn } from "../../redux/auth/action"
import { validatePassword, validatePhone } from "../../util/helper"
import { INDIGO_2 } from "../../util/palette"
import ToastHandler from "../../util/toast"
const SigninScreen = () => {
  const navigation = useNavigation()
  const { isShowKeyboard } = useSelector((state) => state.common)
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const onSignIn = () => {
    var msg = null
    if ((msg = validatePhone(phone)) || (msg = validatePassword(password))) {
      ToastHandler.show({ type: "info", text1: msg })
      return
    }

    dispatch(signIn({ phone, password }))
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
          maxLength={6}
          secure={true}
          style={{ marginTop: 20 }}
          onChange={setPassword}
        />
      </View>
      {!isShowKeyboard && (
        <>
          <Button label="signin" onPress={onSignIn} />
          <Link
            style={{
              marginVertical: 20,
            }}
            onPress={() => {
              navigation.navigate("signup")
            }}
            label={"Tạo tài khoản"}
          />
        </>
      )}
    </View>
  )
}

export default SigninScreen
