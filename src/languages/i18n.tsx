import i18n from "i18next"
import { NativeModules, Platform } from "react-native"
import { initReactI18next  } from "react-i18next"
import localesResourse from "./locales"

const getDeviceLocale = () => {
  try {
    if (Platform.OS === "ios") {
      return (
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      )
    } else {
      console.log(
        "Language detected: ",
        NativeModules.I18nManager.localeIdentifier
      )
      return NativeModules.I18nManager.localeIdentifier
    }
  } catch (err) {
    console.log("Get locale error: ", err)
    return "en"
  }
}
const languageDetector = {
  type: "languageDetector",
  detect: () => getDeviceLocale(),
  init: () => {},
  cacheUserLanguage: () => {},
}

i18n
  .use(initReactI18next )
  .use(languageDetector)
  .init({
    compatibilityJSON: "v3",
    resources: localesResourse,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  })

export default i18n
