import { Image, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

type Props = {
  description: string;
  concluded: boolean;
  onChecked: () => void;
  onRemove: () => void;
}

export function ItemTodo({description, concluded, onChecked, onRemove}: Props) {
  return (
      <View style={styles.container}>
        <BouncyCheckbox 
          isChecked={concluded}
          fillColor={concluded? "#8284FA": "#4EA8DE"}
          onPress={onChecked} />
        <Text style={concluded===true ? styles.descriptionfinish : styles.description}>
          {description}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Image source={require('../../../assets/trash.png')} />
        </TouchableOpacity>
      </View>
  )
}