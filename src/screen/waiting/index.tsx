import React, { useEffect } from "react"
import { Image, Text, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import { LOGO } from "../../asset/image"
import Button from "../../component/button"
import { WHITE } from "../../util/palette"

import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import Background from "../../component/background"
import { PlayState } from "../../redux/types"
const WaitingScreen = () => {
  const navigation = useNavigation()
  const { round_idx, rounds } = useSelector<any, PlayState>((state) => state.play)
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

  const onPlay = () => {
    console.log("Round index: ", round_idx)
    SoundPlayer.stop()
    if (round_idx !== 3) navigation.navigate("round" + (round_idx + 1))
    else navigation.navigate("round4_setup")
  }

  const { name, max_score, index } = rounds[round_idx]
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
      }}
    >
      <Background />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Image
          source={LOGO}
          resizeMethod="resize"
          style={{ width: 240, height: 240, alignSelf: "center" }}
        />
        <Text style={{ fontSize: 22, color: WHITE, marginTop: 40 }}>
          {"Vòng " + (index + 1)}
        </Text>
        <Text
          style={{
            fontSize: 32,
            color: WHITE,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: WHITE,
            marginTop: 5,
          }}
        >
          {`Số điểm tối đa mà bạn có thể đạt được là ${max_score} điểm`}
        </Text>
      </View>

      <Button label="Vào" onPress={onPlay} style={{ marginBottom: 20 }} />
    </View>
  )
}

export default WaitingScreen
