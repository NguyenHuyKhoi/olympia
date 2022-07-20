import database, { firebase } from "@react-native-firebase/database"
import { randomItem, shuffle, toArray } from "../util/helper"

const DB_URL =
  "https://olympia-61f38-default-rtdb.asia-southeast1.firebasedatabase.app/"
const DB_REF = firebase.app().database(DB_URL)
class RealtimeDBHandler {
  static get = async (path) => {
    const result = await DB_REF.ref(path).once("value")
    return result.val()
  }

  static getRound1 = async () => {
    console.log("Get data of round1: ")
    const round1s = await RealtimeDBHandler.get("/bank/round1")
    console.log("Rounds1: ", round1s)
    const res = round1s.map((item) => {
      return {
        category: item.category,
        code: item.code,
        ...randomItem(toArray(item.questions)),
      }
    })

    return res
  }

  static getRound2 = async () => {
    let round2s = await RealtimeDBHandler.get("/bank/round2")
    let res = randomItem(round2s)

    return res
  }

  static getRound3 = async () => {
    let round3s = await RealtimeDBHandler.get("/bank/round3")
    let res = round3s.map((item) => {
      return {
        category: item.category,
        code: item.code,
        ...randomItem(toArray(item.questions)),
      }
    })
    return res
  }

  //arr : number question of each type [easy,medium,hard]
  static getRound4 = async (arr) => {
    let round4s = await RealtimeDBHandler.get("/bank/round4")
    let res = []
    arr.map((item, index) => {
      let type = round4s[index]
      let questions = shuffle(toArray(type.questions))
      for (let i = 0; i < item; i++) {
        res.push({
          category: type.category,
          code: type.code,
          ...questions[i],
        })
      }
    })
    return res
  }

  static getPracticeRounds = async () => {
    console.log("firebase on getPracticeRounds begin :")
    let round1 = await RealtimeDBHandler.getRound1()
    let round2 = await RealtimeDBHandler.getRound2()
    let round3 = await RealtimeDBHandler.getRound3()
    let round4 = await RealtimeDBHandler.getRound4([1, 1, 1])

    let rounds = [round1, round2, round3, round4]
    console.log("Get rounds: ", rounds)
    return rounds
  }
}

export default RealtimeDBHandler
