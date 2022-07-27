import { useNavigation } from "@react-navigation/native"
import React, {useEffect} from "react"
import { Alert, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import RoundContent from "../../../component/round_content"

const Round1Screen = () => {
  // const navigation = useNavigation()
  // useEffect(() => {
  //   try {
  //     // play the file tone.mp3
  //     SoundPlayer.loadSoundFile("round1_play", "mp3")
  //     SoundPlayer.play()
  //   } catch (e) {
  //     console.log(`cannot play the sound file`, e)
  //   }
  //   return () => {
  //     SoundPlayer.stop()
  //   }
  // }, [])

  onTimeOut = () => {
    SoundPlayer.stop()
    navigation.navigate("result")
  }
  return (
    <View style={{ flex: 1 }}>
      <RoundContent />
    </View>
  )
}

export default Round1Screen
