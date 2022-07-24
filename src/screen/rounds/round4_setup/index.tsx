import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import SoundPlayer from "react-native-sound-player"
import Button from "../../../component/button"

import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import Background from "../../../component/background"
import { ROUND4_PACKS } from "../../../redux/play/rule"
import { GREEN, INDIGO_3, SILVER, WHITE } from "../../../util/palette"
import QuizPack from "./component/quiz_pack"
import StarCell from "./component/star_cell"

const Round4SetupScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [starIndex, setStarIndex] = useState(null)
  const [packIndex, setPackIndex] = useState(null)

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

  const onSelectPack = (index) => {
    if (packIndex == index) {
      setPackIndex(null)
    } else {
      setPackIndex(index)
    }
  }

  const onPlay = () => {
    setTimeout(() => {
      SoundPlayer.stop()
      navigation.navigate("round4")
    }, 1000)
  }

  const onSelectStar = (index) => {
    if (starIndex === index) {
      setStarIndex(null)
    } else {
      setStarIndex(index)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: INDIGO_3,
        padding: 20,
      }}
    >
      <Background />

      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: WHITE,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          CHỌN GÓI CÂU HỎI
        </Text>
        <FlatList
          data={ROUND4_PACKS}
          keyExtractor={(item, index) => index + ""}
          style={{
            flexGrow: 0,
          }}
          renderItem={({ item, index }) => (
            <QuizPack
              key={"" + index}
              {...item}
              index={index}
              selectedIndex={packIndex}
              onPress={() => onSelectPack(index)}
              style={{ margin: 10 }}
            />
          )}
        />
        <Text
          style={{
            fontSize: 22,
            color: WHITE,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          CHỌN NGÔI SAO HI VỌNG
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          {[1, 2, 3].map((item, index) => (
            <StarCell
              key={"" + index}
              select={starIndex == index}
              onPress={() => onSelectStar(index)}
            />
          ))}
        </View>
      </View>

      <Button
        label="Vào"
        disabled={packIndex == null}
        text_color={SILVER}
        background={GREEN}
        onPress={onPlay}
        margin_top={30}
      />
    </View>
  )
}

export default Round4SetupScreen
