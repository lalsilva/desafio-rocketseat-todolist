import { StyleProp, Text, TextStyle, View } from "react-native";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";

type Props = {
  text: string;
  textStyles: StyleProp<TextStyle>;
  counter: number;
};

export function Counter({ text, textStyles, counter }: Props) {
  return (
    <View style={stylesDefault.row}>
      <Text style={[textStyles, stylesDefault.bold]}>{text}</Text>
      <View style={styles.background}>
        <Text style={[styles.text, stylesDefault.bold]}>{counter}</Text>
      </View>
    </View>
  );
}
