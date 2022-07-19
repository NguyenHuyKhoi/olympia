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
        type: "SIGN_IN_FAILURE",
        payload: {},
      })
    }
  }
}

export const signinSuccess = (user) => {
  return {
    type: userActions.SIGNIN_SUCCESS,
    payload: { user },
  }
}

export const signout = () => {
  return {
    type: userActions.SIGNOUT,
    payload: {},
  }
}
