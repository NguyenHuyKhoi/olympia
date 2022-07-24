import Toast from "react-native-toast-message"
class ToastHandler {
  static show = (notif) => {
    Toast.show(notif)
  }
}

export default ToastHandler
