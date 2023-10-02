import { StatusBar, StyleSheet, View } from "react-native";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { Home } from "./src/screens/Home";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.background} onLayout={onLayoutRootView}>
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
  },
});
