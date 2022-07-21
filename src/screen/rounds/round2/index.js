import React, { useState } from "react"

import { View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { answerKeyword } from "../../../redux/play/action"
import { QUIZ_STATUS } from "../../../redux/play/reducer"
import { ROUNDS } from "../../../util/constants"
import { INDIGO_3 } from "../../../util/palette"
import ToastHandler from "../../../util/toast"
import RoundContent from "./component/round_content"

const Round2Screen = (props) => {
  // const navigation = useNavigation()
  // const {
  //   round_idx,
  //   quiz_idx,
  //   rounds,
  //   status,
  // } = useSelector((state) => state.play)
  // const dispatch = useDispatch()
  // const [modal, setModal] = useState({ state: "" })
  // const onAnswerKeyword = (correct) => {
  //   let keyword_score = ROUNDS[1].max_keyword_score - 20 * (status.length - 1)

  //   if (keyword_score == 0)
  //     // answer keyword after all suggest quesion ;
  //     keyword_score = 20
  //   if (!correct) keyword_score = 0

  //   if (correct) {
  //     ToastHandler.show({
  //       type: "success",
  //       msg: "Bạn đã trả lời đúng từ khóa và nhận " + keyword_score + " điểm.",
  //     })
  //   } else {
  //     ToastHandler.show({
  //       type: "success",
  //       msg: "Bạn đã trả lời sai từ khóa và kết thúc vòng 2.",
  //     })
  //   }

  //   dispatch(answerKeyword(keyword_score))
  // }

  return (
    <View style={{ flex: 1, backgroundColor: INDIGO_3 }}>
      <RoundContent duration={ROUNDS[1].time} />
    </View>
  )
}

export default Round2Screen
