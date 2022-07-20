import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import { SILVER } from "../util/palette"

const Timer = (props) => {
  const { duration, round_idx } = props
  const [time, setTime] = useState(duration)
  const [timerId, setTimerId] = useState(null)

  const pause = () => {
    SoundPlayer.stop()
    if (timerId) {
      clearInterval(timerId)
      setTimerId(null)
    }
  }

  const getTime = () => {
    return time
  }

  const reset = () => {
    console.log("timer reset ")
    pause()
    setTime(duration)
    loop()
  }

  const loop = () => {
    SoundPlayer.loadSoundFile("round" + (round_idx + 1) + "_play", "mp3")
    SoundPlayer.play()
    timerId = setInterval(() => {
      let t = time

      if (t <= 0) {
        pause()
        if (props.onTimeOut) {
          props.onTimeOut()
        }
        // this.reset();
        return
      }

      setTime(t - 1)
    }, 1000)
  }

  useEffect(() => {
    return () => {
      SoundPlayer.stop()
    }
  }, [])

  return (
    <View style={{ position: "absolute", top: 15, right: 30, zIndex: 1 }}>
      <Text style={{ fontSize: 20, color: SILVER }}>{time + " s"}</Text>
    </View>
  )
}

export default Timer
