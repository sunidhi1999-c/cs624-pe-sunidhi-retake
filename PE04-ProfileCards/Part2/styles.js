import { StyleSheet } from 'react-native';
const Colors = {
  light: {background: '#ffffff', text: '#17324d'},
  dark: {background: '#172331', text: '#ffffff'}
};
const baseContainerStyles = {width: 290, minHeight: 240, padding: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center'};
const lightStyles = StyleSheet.create({
  container: {...baseContainerStyles, backgroundColor: Colors.light.background},
  text: {fontSize: 24, marginBottom: 24, color: Colors.light.text}
});
const darkStyles = StyleSheet.create({
  container: {...baseContainerStyles, backgroundColor: Colors.dark.background},
  text: {fontSize: 24, marginBottom: 24, color: Colors.dark.text}
});
export function getStyleSheet(isDark) {return isDark ? darkStyles : lightStyles;}
export default StyleSheet.create({
  container: {...baseContainerStyles, backgroundColor: '#dceeff'},
  text: {fontSize: 20, color: '#153e63', textAlign: 'center'}
});
