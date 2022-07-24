import firestore from "@react-native-firebase/firestore"
interface IFirestore {
  getCollection: (name: string) => Promise<Array<any>>
  add: (name: string, item: any) => Promise<void>
  filterByUserId: (name: string, userId: string) => Promise<Array<any>>
}

class FirestoreHandler implements IFirestore {
  static shared: FirestoreHandler = new FirestoreHandler()
  private constructor() {

  }
  getCollection = async (name: string) => {
    var result = await firestore().collection(name).get()
    var items = result._docs.map((item: any) => item.data())
    return items
  }

  filterByUserId =  async (name: string, userId: string) => {
    var result = await firestore().collection(name).where('user_id', '==', userId).get()
    var items = result._docs.map((item: any) => item.data())
    return items
  } 

  add = async (name: string, item: any) => {
    await firestore().collection(name).add(item)
  }
}

export default FirestoreHandler
