import { Action } from "../types"

interface IListenKeyboard {
  (open: boolean): Action
}
export const listenKeyboard: IListenKeyboard = (open) => {
  return {
    type: open ? "SHOW_KEYBOARD" : "HIDE_KEYBOARD",
    payload: {},
  }
}
