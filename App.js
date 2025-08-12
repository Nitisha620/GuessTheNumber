import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./presentation/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./presentation/GameScreen";

export default function App() {
  const [pickNumber, setPickedNumber] = useState();

  function pickedNumberHandler(chosenNumber) {
    setPickedNumber(chosenNumber);
  }
  
  let screen = <StartGameScreen onConfirmedNumber={pickedNumberHandler} />;
  if (pickNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.mainScreen}>
      <ImageBackground
        style={styles.mainScreen}
        imageStyle={styles.image}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.7,
  },
});
