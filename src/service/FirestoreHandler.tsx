import firestore from "@react-native-firebase/firestore"
interface IFirestore {
  getCollection: (name: string) => Promise<Array<any>>
  add: (name: string, item: any, id: string) => Promise<void>,
  update: (name: string, item: any, id: string) => Promise<void>
  filterByField: (name: string, field: Field) => Promise<Array<any>>
}

export type Field = {
  name: string, 
  operator: string, 
  value: string
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

  filterByField =  async (collectioName: string, field: Field) => {
    const {name, operator, value} = field
    var result = await firestore().collection(collectioName).where(name, operator, value).get()
    var items = result._docs.map((item: any) => item.data())
    return items
  } 

  add = async (name: string, item: any, id: string) => {
    await firestore().collection(name).doc(id).set({
      ...item,
      id
    })
  }

  update = async (name: string, item: any, id: string) => {
    console.log("Update user: ", item, id)
    await firestore().collection(name).doc(id).update({
      ...item
    })
  }
}

export default FirestoreHandler
