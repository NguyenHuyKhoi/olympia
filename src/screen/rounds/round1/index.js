import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Alert, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import RoundContent from "../../../component/round_content"

import { ROUNDS } from "../../../util/constants"

const Round1Screen = () => {
  const navigation = useNavigation()
  onTimeOut = () => {
    Alert.alert("time out")
    SoundPlayer.stop()
    navigation.navigate("result")
  }
  return (
    <View style={{ flex: 1 }}>
      <RoundContent
        duration={ROUNDS[0].time}
        answer_time={ROUNDS[0].all_time}
      />
    </View>
  )
}

export default Round1Screen
