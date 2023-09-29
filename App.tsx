import { StatusBar, StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
});
