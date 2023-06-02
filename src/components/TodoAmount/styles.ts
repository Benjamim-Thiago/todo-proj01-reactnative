import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tableAmout: {
    backgroundColor: '#1A1A1A',
    marginBottom: 20
  },
  rowAmout: {
    flexDirection: 'row',
    width: '100%',
    height: 19,
  },
  cellCreated: {
    color: '#4EA8DE',
    fontWeight: "bold",
  },
  cellAmountCreated: {
    color: '#D9D9D9',
    width: 25,
    backgroundColor: '#333333',
    borderRadius: 8,
    marginLeft: 10,
    fontWeight: "bold",
    textAlign:"center"
  },
  cellConcluded: {
    color: '#8284FA',
    fontWeight: "bold",
  },
  cellAmountConcluded: {
    width: 25,
    height: 19,
    color: '#D9D9D9',
    borderRadius: 8,
    marginLeft: 10,
    backgroundColor: '#333333',
    fontWeight: "bold",
    textAlign:"center"
  },
})
