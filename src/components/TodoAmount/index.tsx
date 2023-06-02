import { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
type AmountProps = {
  created: number,
  concluded: number
}
export function Amount({ created, concluded }: AmountProps ) {
  return (
    <Fragment>
      <View style={styles.tableAmout}>
        <View style={styles.rowAmout}>
          <Text style={styles.cellCreated}>Criadas</Text>
          <Text style={styles.cellAmountCreated}>{created}</Text>
          <Text style={{flex: 1}}></Text>
          <Text style={styles.cellConcluded}>Concluidas</Text>
          <Text style={styles.cellAmountConcluded}>{concluded}</Text>
        </View>
      </View>
    </Fragment>
  )
}