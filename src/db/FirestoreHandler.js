import firestore from "@react-native-firebase/firestore"
class FirestoreHandler {
  static getCollection = async (name) => {
    console.log("Get collection :", name)
    var result = await firestore().collection(name).get()
    var items = result._docs.map((item) => item.data())
    console.log("get collection items: ", items)
    return items
  }
}

export default FirestoreHandler
