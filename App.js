import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import styles from "./src/style/StyleSheet";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

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
        <TextInput></TextInput>
        <Button
          style={styles.button}
          title="Caucular"
          onPress={() => visModal(true)}
        />
        <Modal transparent={true} animationType="fade" visible={visible}>
          <View style={styles.modal}>
            <View style={styles.modal}>
              <Text style={{ fontSize: 20 }}>Modal</Text>
              <Button
                title="Caucular novamente"
                onPress={() => visModal(false)}
              />
            </View>
          </View>
        </Modal>
      </View>

      {/* true or false*/}
    </View>
  );
}
