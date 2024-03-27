import { View, Image, Text, TextInput, TouchableOpacity, Modal, Button } from "react-native";
import styles from "./src/style/StyleSheet";
import { useState } from "react";
import ComponentModel from "./src/components/componentModel"

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
    
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./src/assets/images/Logo.png")}

      <View style={styles.home}>
        <Text style={styles.question}>Qual a melhor opção?</Text>

        <Text style={styles.insert}>Álcool (preço por litro):</Text>
        <TextInput style={styles.inputs}></TextInput>

        <Text style={styles.insertt}>Gasolina (preço por litro):</Text>
        <TextInput style={styles.inputs}></TextInput>

        <TouchableOpacity style={styles.button} onPress={() => visModal(true)}>
          <Text style={styles.btn}>Calcular</Text>
          </TouchableOpacity>

        <Modal transparent={true} animationType="fade" visible={visible}>
      
          <View style={styles.modal}>
            <ComponentModel/>
            
              <Button
                title="Calcular novamente"
                onPress={() => visModal(false)}
              />

          </View>
        </Modal>

      </View>

    </View>
  );
}
