import React, { Component } from "react"

import { Keyboard, TextInput, View } from "react-native"
import { INDIGO_3, WHITE } from "../util/palette"
import Button from "./button"
export default class AnswersInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: "",
      show_keyboard: false,
    }
  }

  componentDidMount = () => {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        this.setState({ show_keyboard: true })
      }
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        this.setState({ show_keyboard: false })
      }
    )
  }

  answer = () => {
    //    if (this.state.answer==='') return ;
    let is_correct =
      this.state.answer.toLowerCase() ===
      this.props.correct_answer.toLowerCase()
    setTimeout(() => {
      this.setState({
        answer: "",
      })
      this.props.onAnswer(is_correct)
    }, 1000)
  }
  render() {
    const { correct_answer } = this.props
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          value={this.state.answer}
          placeholder={"Có " + correct_answer.length + " ký tự"}
          style={{
            width: "80%",
            height: 60,
            borderRadius: 20,
            backgroundColor: WHITE,
            textAlign: "center",
            color: INDIGO_3,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 35,
          }}
          onChangeText={(value) => this.setState({ answer: value })}
        />

        {this.state.show_keyboard ? null : (
          <Button onPress={this.answer} width="80%" label="Trả lời" />
        )}

        {/* <Text style={{fontSize:18,color:this.defineColor(),fontStyle:'italic',marginTop:10}}>
                    {
                        this.defineResultText()
                    }
                </Text> */}
      </View>
    )
  }
}
