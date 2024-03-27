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

        <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        onRequestClose={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão "Voltar" no Android
      >
        <Image
        style={styles.logo}
        source={require("./src/assets/images/gas.png")}
      />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <Text style={{ color:"white"}}>Compensa usar Alcool</Text>

          <View style={{ backgroundColor: 'white', padding: 150, borderRadius: 10 }}>
          
          <Text style={{ color:"green"}}>Compensa usar Alcool</Text>

            <Button
              title="Fechar Modal"
              onPress={() => funcaoMod(false)} // Fechar o modal ao pressionar o botão
            />
          </View>
        </View>
      </Modal>
      
      </View>

      {/* true or false*/}
    </View>
  );
}
