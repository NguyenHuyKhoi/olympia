import React from "react"
import { Text, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import Button from "../../../component/button"

import { useDispatch } from "react-redux"

import { ROUNDS } from "../../../util/constants"

const levels = ROUNDS[3].levels

import { useNavigation } from "@react-navigation/native"
import { GREEN, INDIGO_3, SILVER } from "../../../util/palette"
import QuizPack from "./component/quiz_pack"

const Round4SetupScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [arr, setArr] = useState([1, 1, 1])
  const [totalScore, setTotalScore] = useState(60)
  const [pickedStar, setPickedStar] = useState(-1)

  const pickLevel = (l2, l1) => {
    const tempArr = arr
    tempArr[l2]++
    tempArr[l1]--
    setArr(tempArr)

    const newScore = totalScore - levels[l1].score + levels[l2].score
    setTotalScore(newScore)
  }

  const enterRound4 = () => {
    dispatch(chooseRound4Questions(arr, pickedStar))

    setTimeout(() => {
      SoundPlayer.stop()
      navigation.navigate("round4")
    }, 1000)
  }

  useEffect(() => {
    try {
      // play the file tone.mp3
      SoundPlayer.loadSoundFile("round4_choose", "mp3")
      SoundPlayer.play()
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }

    return () => {
      SoundPlayer.stop()
    }
  }, [])

  const pickStar = (index) => {
    if (pickedStar === index) {
      setPickedStar(-1)
    } else {
      setPickedStar(index)
    }
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
      <Text
        style={{
          fontSize: 25,
          color: SILVER,
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        CHỌN GÓI CÂU HỎI
      </Text>

      {[1, 2, 3].map((item, index) => (
        <QuizPack
          key={"" + index}
          index={index + 1}
          is_picked_star={index === pickedStar}
          pickLevel={pickLevel}
          pickStar={() => pickStar(index)}
          default_level={index}
        />
      ))}

      <Text style={{ fontSize: 25, color: SILVER, marginTop: 20 }}>
        {"Tổng : " + totalScore}
      </Text>

      <Button
        label="Vào"
        text_color={SILVER}
        background={GREEN}
        onPress={enterRound4}
        margin_top={30}
      />
    </View>
  )
}

export default Round4SetupScreen
