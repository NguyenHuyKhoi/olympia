export const listenKeyboard = (open) => {
  return {
    type: open ? "SHOW_KEYBOARD" : "HIDE_KEYBOARD",
    payload: {},
  }
}
