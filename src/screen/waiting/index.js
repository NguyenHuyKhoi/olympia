import React, { Component } from "react"
import SoundPlayer from "react-native-sound-player"
import { View, Image, StyleSheet, Alert, Text } from "react-native"
import Button from "../../component/button"
import { LOGO } from "../../resource/image"
import { INDIGO_2, SILVER, INDIGO_3, GREEN } from "../../util/palette"

import { connect, useSelector } from "react-redux"
import * as actions from "../../redux/practice/action"
import { ROUNDS } from "../../util/constants"
import { useNavigation } from "@react-navigation/native"

const WaitingScreen = () => {
  const navigation = useNavigation()
  const { round_idx } = useSelector((state) => state.practice)
  useEffect(() => {
    try {
      // play the file tone.mp3
      SoundPlayer.loadSoundFile("start", "mp3")
      SoundPlayer.play()
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
    return () => {
      SoundPlayer.stop()
    }
  }, [])

  const round = ROUNDS[round_idx]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={LOGO}
        resizeMethod="resize"
        style={{ width: 120, height: 120, marginTop: 40 }}
      />
      <Text style={{ fontSize: 22, color: SILVER, marginTop: 15 }}>
        {"Vòng " + round.index}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: SILVER,
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        {round.name}
      </Text>

      <Button
        label="Vào"
        text_color={SILVER}
        background={GREEN}
        onPress={() => {
          SoundPlayer.stop()
          if (cri !== 3) navigation.navigate("round" + (round + 1))
          else navigation.navigate("round4_setup")
        }}
        margin_top={250}
      />
    </View>
  )
}

export default WaitingScreen
