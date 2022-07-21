import database, { firebase } from "@react-native-firebase/database"
import { GameBank, QuizBank, Round } from "../redux/types"
import { randomItem, shuffle, toArray } from "../util/helper"

const DB_URL =
  "https://olympia-61f38-default-rtdb.asia-southeast1.firebasedatabase.app/"
const DB_REF = firebase.app().database(DB_URL)
interface IRealtimeDB {
  get: (path: string) => Promise<any>
  getBank: () => Promise<GameBank>
}

class RealtimeDBHandler implements IRealtimeDB {
  private gameBank?: GameBank
  static shared: RealtimeDBHandler = new RealtimeDBHandler()
  private constructor (){}

  get = async (path: string) => {
    const result = await DB_REF.ref(path).once("value")
    return result.val()
  }
  
  getBank = async () => {
    // Only get remote data when it has not same local data anymore
    if (this.gameBank) return this.gameBank
    const gameBank: GameBank = await RealtimeDBHandler.shared.get('/data_bank')
    this.gameBank = gameBank
    return gameBank
  }
}

export default RealtimeDBHandler
