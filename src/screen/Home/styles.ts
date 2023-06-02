import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  top: {
    width: '100%',
    height: 173,
    backgroundColor:'#0D0D0D',
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    height: 54,
    marginLeft: 24,
    marginRight: 24,
    marginTop: -25,
    marginBottom: 40,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#262626',
    color: '#FFF',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 8,
    width: '72%'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: { 
    flex:1,
    height:100,
    marginLeft: 24,
    marginRight: 24,
  },
  emptyList: {
    paddingTop: 70,
    borderTopWidth: 1,
    borderTopColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textEmptyListBold: {
    marginTop: 20,
    color: '#808080',
    fontWeight: 'bold',
  },
  textEmptyList: {
    color: '#808080',
  }
})