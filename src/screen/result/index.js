import React, { useEffect, useState } from "react"

import { Text, View } from "react-native"

import SoundPlayer from "react-native-sound-player"

import { INDIGO_3, SILVER } from "../../util/palette"

import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../component/button"
import { nextRound, saveResult } from "../../redux/practice/action"
import ResultItem from "../history/component/result_item"
const ResultScreen = (props) => {
  const { round_idx, scores } = useSelector((state) => state.practice)
  const { user } = useSelector((state) => state.auth)
  const [time, setTime] = useState(new Date().toISOString())
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onNextRound = async () => {
    if (round_idx < 3) {
      SoundPlayer.stop()
      dispatch(nextRound())
      navigation.navigate("waiting")
    } else {
      var currentTime = new Date().toISOString()
      dispatch(
        saveResult({
          time: currentTime,
          scores,
          user_id: user.phone,
        })
      )
      navigation.navigate("home")
    }
  }

  useEffect(() => {
    try {
      // play the file tone.mp3
      SoundPlayer.loadSoundFile("end", "mp3")
      SoundPlayer.play()
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
    return () => {
      SoundPlayer.stop()
    }
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: SILVER,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        KẾT QUẢ
      </Text>

      <ResultItem scores={scores} time={time} />

      <Button label="TIẾP" onPress={onNextRound} />
    </View>
  )
}

export default ResultScreen
