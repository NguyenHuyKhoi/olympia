import React, { useEffect } from "react"
import { Image, Text, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import Button from "../../component/button"
import { LOGO } from "../../resource/image"
import { GREEN, INDIGO_3, SILVER } from "../../util/palette"

import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { ROUNDS } from "../../util/constants"

const WaitingScreen = () => {
  const navigation = useNavigation()
  const { round_idx } = useSelector((state) => state.play)
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

  const onPlay = () => {
    SoundPlayer.stop()
    if (round_idx !== 3) navigation.navigate("round" + (round_idx + 1))
    else navigation.navigate("round4_setup")
  }
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
        {"Vòng " + (round_idx + 1)}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: SILVER,
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        {"round.name"}
      </Text>

      <Button
        label="Vào"
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
        }}
        onPress={onPlay}
      />
    </View>
  )
}

export default WaitingScreen
