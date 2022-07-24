
import FirestoreHandler from "../../service/FirestoreHandler"
import uuid from 'react-native-uuid'
import { Action, User } from "../types"
interface ISignIn {
  (data: User): (dispatch: any) => Promise<void>
}

interface ISignUp {
  (data: User): (dispatch: any) => Promise<void>
}

interface ISignOut {
  (): Action
}

interface IUpdateInfor {
  (data: User): (dispatch: any) => Promise<void>
}

export const signIn: ISignIn= ({ phone, password }) => {
  return async (dispatch) => {
    let users = await FirestoreHandler.shared.filterByField("User", {name: 'phone', operator: '==', value: phone})
    console.log("Sign in users: ", users)
    if (users.length == 1 && users[0].password == password) {
      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: {
          user: users[0],
        },
      })
    } else {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notification: {
            type: "error",
            text1: "Sign in failure",
          },
        },
      })
    }
  }
}

export const signUp: ISignUp = (data) => {
  return async (dispatch) => {
    let users = await FirestoreHandler.shared.filterByField("User", {name: 'phone', operator: '==', value: data.phone})
    console.log("Find users: ", users)
    if (users.length == 0) {

      const id = uuid.v4().toString()
      data.id = id 
      data.username = 'user000'

      await FirestoreHandler.shared.add("User", data, id)
      console.log("Sign up with user: ", data)
      dispatch({
        type: "SIGN_UP_SUCCESS",
        payload: {
          user: data,
        },
      })
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notification: {
            type: "success",
            text1: "Sign up success",
          },
        },
      })
    } else {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notification: {
            type: "error",
            text1: "Sign up failure",
          },
        },
      })
    }
  }
}

export const signout: ISignOut = () => {
  return {
    type: "SIGN_OUT_SUCCESS",
    payload: {},
  }
}

export const updateInfor: IUpdateInfor = (user) => {
  return async (dispatch) => {
    console.log("Call update infor action")
    await FirestoreHandler.shared.update("User", user, user.id)
    dispatch({
      type: "UPDATE_INFOR",
      payload: {
        user,
      },
    })
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        notification: {
          type: "success",
          text1: "Update successfully",
        },
      },
    })
  }
}
