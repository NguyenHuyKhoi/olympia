import firestore from "@react-native-firebase/firestore"
interface IFirestore {
  getCollection: (name: string) => Promise<Array<any>>
  add: (collectionName: string, item: any) => Promise<void>
}

class FirestoreHandler implements IFirestore {
  static shared: FirestoreHandler = new FirestoreHandler()
  private constructor() {

  }
  getCollection = async (name: string) => {
    console.log("Get collection :", name)
    var result = await firestore().collection(name).get()
    var items = result._docs.map((item: any) => item.data())
    console.log("get collection items: ", items)
    return items
  }

  add = async (collectionName: string, item: any) => {
    await firestore().collection(collectionName).add(item)
  }
}

export default FirestoreHandler
