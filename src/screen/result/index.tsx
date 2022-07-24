import React, { useEffect, useState } from "react"

import { Text, View } from "react-native"

import SoundPlayer from "react-native-sound-player"


import {WHITE} from '../../util/palette'

import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../component/button"
import { nextRound, saveResult } from "../../redux/play/action"
import ResultItem from "../history/component/result_item"
import Background from '../../component/background'
import {Round} from '../../redux/types'
const ResultScreen = (props) => {
  const gameData = useSelector((state) => state.play)
  const {rounds, round_idx} = gameData
  const { user } = useSelector((state) => state.auth)
  const [time, setTime] = useState(new Date().toISOString())
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const round: Round = rounds[round_idx]
  const onNextRound = async () => {
    if (round_idx < 3) {
      SoundPlayer.stop()
      dispatch(nextRound())
      navigation.navigate("waiting")
    } else {
      dispatch(saveResult(user, gameData))
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
        flexDirection: "column",
        padding: 20
      }}
    >
      <Background/>
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        marginTop: 50
      }}>
        <ResultItem scores={rounds.map(r => r.score)} time={time} open = {true}/>
        <Text style={{ fontSize: 22, color: WHITE, marginTop: 40 }}>
          {"Vòng " + (round_idx + 1)}
        </Text>
        <Text
          style={{
            fontSize: 32,
            color: WHITE,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {round.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: WHITE,
            marginTop: 5,
          }}
        >
          {`Số điểm tối đa mà bạn có thể đạt được là ${round.max_score} điểm`}
        </Text>
      </View>
    

      <Button label="TIẾP" onPress={onNextRound} />
    </View>
  )
}

export default ResultScreen
