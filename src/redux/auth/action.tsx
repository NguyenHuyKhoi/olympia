const FirestoreHandler = require("../../service/FirestoreHandler")
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
    let users = await FirestoreHandler.getCollection("User")
    let user = users.find(
      (item: User) => item.phone == phone && item.password == password
    )
    if (user) {
      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: {
          user,
        },
      })
    } else {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notif: {
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
    let users = await FirestoreHandler.getCollection("User")
    let existUser = users.find((item: User) => item.phone == data.phone)
    if (!existUser) {
      await FirestoreHandler.add("User", data)
      dispatch({
        type: "SIGN_UP_SUCCESS",
        payload: {
          user: data,
        },
      })
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notif: {
            type: "success",
            text1: "Sign up success",
          },
        },
      })
    } else {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: {
          notif: {
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
    await FirestoreHandler.update("User", "234", user)
    dispatch({
      type: "UPDATE_INFOR",
      payload: {
        user,
      },
    })
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        notif: {
          type: "success",
          text1: "Update successfully",
        },
      },
    })
  }
}
