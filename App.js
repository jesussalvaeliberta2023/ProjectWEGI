import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./src/style/StyleSheet";

export default function App() {
  return (
    //Essa é a View principal, que ocupa toda a tela
    <View style={styles.container}>
      {/* Esse é o botão que vai abrir o meu modal e vai deixar a visibilidade como "true" */}
      <Image
        style={styles.logo}
        source={require("./src/assets/images/Logo.png")}
      />
      <View style={styles.home}>
        <Text style={styles.question}>Qual a melhor opção?</Text>

        <Text style={styles.insert}>Álcool (preço por litro):</Text>
        <TouchableOpacity />
      </View>

      {/* true or false*/}
    </View>
  );
}
