import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./presentation/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.mainScreen}>
      <ImageBackground
        style={styles.mainScreen}
        imageStyle={styles.image}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  image:{
    opacity: 0.7
  }
});
