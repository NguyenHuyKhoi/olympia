import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"

import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ButtonComponent from "../../component/button.component"
import InputTextComponent from "../../component/input_text.component"
import { signIn } from "../../redux/auth/action"
import { LOGO } from "../../resource/image"
import { APP_NAME } from "../../util/constants"
import { validatePassword, validatePhone } from "../../util/helper"
import { GREEN, INDIGO_2, WHITE } from "../../util/palette"

const SigninScreen = () => {
  const { user } = useSelector((state) => state.auth)
  const navigation = useNavigation()
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      setPassword("")
      setPhone("")
      navigation.navigate("home")
    }
    Keyboard.addListener("keyboardDidShow", () => setIsShowKeyboard(true))
    Keyboard.addListener("keyboardDidHide", () => setIsShowKeyboard(false))
  }, [])

  const onSignIn = () => {
    var msg = null
    if ((msg = validatePhone(phone)) || (msg = validatePassword(password))) {
      Alert.alert(msg)
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
        padding: 20,
      }}
    >
      {!isShowKeyboard && (
        <Image
          source={LOGO}
          resizeMethod="resize"
          style={{
            width: 120,
            height: 120,
            marginTop: 50,
          }}
        />
      )}
      <Text
        style={{
          fontSize: 25,
          color: WHITE,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {APP_NAME}
      </Text>
      <InputTextComponent
        logo="account-circle"
        label="Số điện thoại"
        type="numeric"
        value={phone}
        onChange={setPhone}
      />
      <InputTextComponent
        logo="https"
        label="Mật khẩu"
        type="default"
        value={password}
        onChange={setPassword}
      />
      <ButtonComponent
        label="ĐĂNG NHẬP"
        text_color={WHITE}
        background={GREEN}
        onPress={onSignIn}
        margin_top={!isShowKeyboard ? 50 : 20}
      />

      {!isShowKeyboard && (
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
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ fontSize: 17, color: WHITE }}>Tạo tài khoản</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 17, color: WHITE }}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default SigninScreen
