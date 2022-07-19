import React from "react"

import { Text, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../component/button"
import CrosswordsModal from "../../../component/crosswords.modal"
import HintImageModal from "../../../component/hint_image.modal"
import RoundComponent from "../../../component/round_content"
import { ROUNDS } from "../../../util/constants"
import { GREEN, INDIGO_3, WHITE } from "../../../util/palette"
import ToastHandler from "../../../util/toast"

const Round2Screen = (props) => {
  const navigation = useNavigation()
  const {
    round_idx,
    quiz_idx,
    rounds,
    status,
    is_guessed_round2_keyword,
    keyword_answered,
  } = useSelector((state) => state.practice)
  const dispatch = useDispatch()
  const [modal, setModal] = useState({ state: "" })
  const onAnswerKeyword = (correct) => {
    let keyword_score = ROUNDS[1].max_keyword_score - 20 * (status.length - 1)

    if (keyword_score == 0)
      // answer keyword after all suggest quesion ;
      keyword_score = 20
    if (!correct) keyword_score = 0

    if (correct) {
      ToastHandler.show({
        type: "success",
        msg: "Bạn đã trả lời đúng từ khóa và nhận " + keyword_score + " điểm.",
      })
    } else {
      ToastHandler.show({
        type: "success",
        msg: "Bạn đã trả lời sai từ khóa và kết thúc vòng 2.",
      })
    }

    dispatch(answerKeyword(keyword_score))
  }

  let round2 = rounds[1]

  return (
    <View style={{ flex: 1, backgroundColor: INDIGO_3 }}>
      <HintImageModal
        states={[...status]}
        url={round2.keyword.image}
        keyword_answered={keyword_answered}
        open={modal.state == "hint"}
      />

      <CrosswordsModal
        keyword={round2.keyword.answer}
        keyword_answered={keyword_answered}
        show_keyword={is_guessed_round2_keyword}
        answers={round2.questions.map((item) =>
          item.answer.replace(" ", "").toUpperCase()
        )}
        states={[...status]}
        onAnswerKeyword={onAnswerKeyword}
        open={modal.state == "crossword"}
      />
      <Icon
        onPress={() => {
          setModal({ status: "hint" })
        }}
        name="insert-photo"
        size={40}
        color={GREEN}
        style={{ position: "absolute", top: 300, left: 10, zIndex: 1 }}
      />

      <Icon
        onPress={() => {
          setModal({ status: "crossword" })
        }}
        name="reorder"
        size={40}
        color={GREEN}
        style={{ position: "absolute", top: 300, right: 10, zIndex: 1 }}
      />

      {!keyword_answered ? (
        <RoundComponent
          duration={ROUNDS[1].time}
          onAnswerKeyword={onAnswerKeyword}
        />
      ) : (
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: WHITE,
              textAlign: "center",
              maxWidth: "60%",
              marginTop: 50,
              marginBottom: 400,
            }}
          >
            Vòng 2 đã kết thúc. Nhấn Tiếp để bắt đầu vòng 3.
          </Text>
          <Button
            label="Tiếp"
            onPress={() => navigation.navigate("practice_result")}
          />
        </View>
      )}
    </View>
  )
}

export default Round2Screen
