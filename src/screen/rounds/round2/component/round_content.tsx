import React, { useEffect, useRef, useState } from "react"

import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Background from "../../../../component/background"
import QuizContent from "./quiz_content"
import Timer from "../../../../component/timer"
import { remove } from "../../../../util/helper"
import AnswerInput from "./answer_input"
import Crosswords from "./crosswords"
import KeywordHint from "./keyword_hint"
import { Quiz } from "../../../../redux/types"
import { enableAnswerKeyword, nextQuiz } from "../../../../redux/play/action"
import IconButton from "../../../../component/icon_button"
import { GREEN, WHITE } from "../../../../util/palette"
import Button from "../../../../component/button"
import ScoreView from "../../../../component/score_view"
const VIEW_TYPE = {
  QUIZ: 0,
  CROSSWORD: 1,
  KEYWORD: 2,
}
const RoundContent = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [viewType, setViewType] = useState(VIEW_TYPE.QUIZ)
  const { round_idx, quiz_idx, rounds, score } = useSelector(
    (state) => state.play
  )

  const {quizzes} = rounds[1]
  const quiz: Quiz = quizzes[quiz_idx]
  const uri = rounds[1].keyword.image
  const keyword = rounds[1].keyword
  const isEnableKeyword = keyword.status != 'none'
  const isAnsweredKeyword = keyword.status == 'wrong' || keyword.status == 'correct'
  const num_quiz = quizzes.length
  const onNextView = () => {
    setViewType((viewType + 1) % 3)
  }

  const onAnswer = () => {

  }

  const onEnableAnswerKeyword = () => {
    dispatch(enableAnswerKeyword())
  }

  const onViewResult = () => {
    navigation.navigate('result')
  }

  const unhide = keyword.status == 'wrong' || keyword.status == 'correct'
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "red",
      }}
    >
      <Background />
      <ScoreView
        score = {score}
        style = {{
          marginTop: 5,
          alignSelf: 'center'
        }}/>
      {viewType == VIEW_TYPE.QUIZ ? (
        <QuizContent
          unhide = {unhide}
          isEnableKeyword = {isEnableKeyword}
          quiz = {isEnableKeyword || isAnsweredKeyword ? keyword : quiz}
          quiz_idx={quiz_idx}
          num_quiz={num_quiz}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
          round_idx = {round_idx}
        />
      ) : viewType == VIEW_TYPE.CROSSWORD ? (
        <Crosswords
          unhide = {unhide}
          quizzes={quizzes}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
        />
      ) : (
        <KeywordHint
          uri={uri}
          unhide = {unhide}
          quizzes = {quizzes}
          keyword={keyword}
          style={{
            marginVertical: 20,
            flex: 1,
          }}
        />
      )}
      {
        !isAnsweredKeyword &&
        <IconButton
        color = {isEnableKeyword ? GREEN : WHITE}
        style = {{alignSelf: 'center',marginVertical: 10}}
        logo = 'notifications-active'
        onPress = {onEnableAnswerKeyword}
      />
      }


      {
        isAnsweredKeyword ? 
        <View 
          style = {{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <IconButton
              onPress={onNextView}
              logo="arrow-forward"
              style={{
                flex: 1,
                marginHorizontal: 20,
              }}
         />
          <Button
            onPress = {onViewResult}
            label = 'Next round'
            style = {{
              flex: 1,
              marginHorizontal: 20
            }}
          />
        </View>
        :
        <AnswerInput
          {...(isEnableKeyword ? keyword : quiz)}
          quiz_idx = {quiz_idx}
          onAnswer={onAnswer}
          isEnableKeyword = {isEnableKeyword}
          onNext={onNextView}
        />
      }
     
    </View>
  )
}

export default RoundContent
