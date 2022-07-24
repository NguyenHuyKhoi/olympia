import React, { useState } from "react"

import { View } from "react-native"
import Button from "../../component/button"
import InputText from "../../component/input_text"
import { INDIGO_2 } from "../../util/palette"

import { useDispatch, useSelector } from "react-redux"
import Background from "../../component/background"
import SmallHeader from "../../component/small_header"
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
    if ((msg = validatePhone(phone)) || (msg = validatePassword(password))) {
      ToastHandler.show({ type: "info", text1: msg })
      return
    }

    dispatch(updateInfor({ ...user, phone, password, username }))
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
      <SmallHeader
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
          disabled = {true}
          maxLength={10}
          onChange={setPhone}
        />
        <InputText
          placeholder="Tên người dùng"
          type="default"
          value={username}
          maxLength={10}
          onChange={setUsername}
          style={{ marginTop: 20 }}
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
          <Button
            label="Cập nhật"
            onPress={onUpdate}
            style={{ marginBottom: 20 }}
          />
        </>
      )}
    </View>
  )
}

export default SettingScreen
