import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 15
  },
  description: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16
  },
  descriptionfinish: {
    flex: 1,
    color: '#808080',
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})