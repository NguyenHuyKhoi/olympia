import Toast from "react-native-toast-message"
class ToastHandler {
  static show = (notif) => {
    console.log("Show notif: ", notif)
    Toast.show(notif)
  }
}

export default ToastHandler
