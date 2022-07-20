import React from "react"

import { View } from "react-native"
import Modal from "react-native-modalbox"
import AnswerInput from "../../../../component/answer_input"
import { remove } from "../../../../util/helper"
import { INDIGO_2 } from "../../../../util/palette"
import Keyword from "./keyword"
import Word from "./word"
const CrosswordsModal = (props) => {
  const {
    open,
    answers,
    keyword,
    status,
    show_keyword,
    keyword_answered,
  } = props

  const answer = (correct) => {
    console.log("crosswordModal onAnswer :", correct)
    props.onAnswer(correct)
  }
  return (
    <Modal
      position="center"
      backdrop={true}
      style={{
        width: "90%",
        height: keyword_answered ? 250 : 400,
        borderRadius: 5,
      }}
      isOpen={open}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: INDIGO_2,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "70%",
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Keyword
            content={remove(keyword.toUpperCase(), " ")}
            show={keyword_answered || show_keyword}
          />
        </View>

        {answers.slice(0, 4).map((item, index) => (
          <Word
            key={"" + index}
            content={item}
            show={keyword_answered}
            status={status[index]}
          />
        ))}

        {keyword_answered ? null : (
          <AnswerInput correct_answer={keyword} onAnswer={answer} />
        )}
      </View>
    </Modal>
  )
}

export default CrosswordsModal
