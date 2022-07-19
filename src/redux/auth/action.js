import FirestoreHandler from "../../db/FirestoreHandler"
import { userActions } from "../action_constant"
export const signIn = ({ phone, password }) => {
  return async (dispatch) => {
    let users = await FirestoreHandler.getCollection("User")
    let user = users.find(
      (item) => item.phone == phone && item.password == password
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

export const signUp = (data) => {
  return async (dispatch) => {
    let users = await FirestoreHandler.getCollection("User")
    let existUser = users.find((item) => item.phone == data.phone)
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

export const signout = () => {
  return {
    type: "SIGN_OUT_SUCCESS",
    payload: {},
  }
}
