export const theme = {
  palette: {
    primary: {
      main: "#f2d55d",
    },
    secondary: {
      main: "#f6e9bd",
    },
    background: {
      main: "#fff",
    },
    error: {
      main: "#ec7555",
    },
    warning: {
      main: "#C4C3BE",
    },
    info: {
      main: "#CDDEE8",
    },
    success: {
      main: "#6AC8EE",
    },
    default: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "setofont",
    label: {
      fontSize: 22,
      color: "#000",
    },
    caption: {
      fontSize: 18,
      color: "#000",
    },
    btnLabel: {
      fontSize: 24,
      color: "#000",
    },
    header: {
      fontSize: 36,
      color: "#000",
    },
    button: {
      fontStyle: "italic",
    },
    bigLabel: {
      fontSize: 28,
      color: "#000",
    },
    bigHeader: {
      fontSize: 50,
      color: "#000",
    },
  },
  spacing: (value = 2) => {
    return value * 10 // MUI spacing
  },
  borderStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
}
