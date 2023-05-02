const primaryColor = "#003057";
const secondaryColor = "#f8f9fa";
const highlightColor = "#3498db";
const textColorLight = "#f0f0f0";
const textColorDark = "#333333";
const whiteColor = "#ffffff";
const blackColor = "#000000";
const lightGrey = "#f0f0f0";
const darkGrey = "#1a1a1a";
const translateButtonColor = "#e74c3c"

const lightTheme = {
  headerBackground: primaryColor,
  headerText: whiteColor,
  bodyBackground: lightGrey,
  bodyText: textColorDark,
  inputBorder: blackColor,
  buttonColor: highlightColor,
  buttonText: whiteColor,
  asideBackground: secondaryColor,
  asideColor: whiteColor
};

const darkTheme = {
  headerBackground: darkGrey,
  headerText: whiteColor,
  bodyBackground: blackColor,
  bodyText: textColorLight,
  inputBorder: whiteColor,
  buttonColor: highlightColor,
  buttonText: whiteColor,
};

export { lightTheme, darkTheme };
