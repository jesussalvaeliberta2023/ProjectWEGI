import { Text, View, Modal, Button, Image } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./src/styles/StyleSheet";

export default function App() {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  // O useEffect fica observando a variável...
  useEffect(() => {
    if (name.length === 29) {
      alert("OH, NO! YOU CAN´T DO IIIIT!");
    }
  }, [name]);

  changeTxt = (textInput) => {
    setName(`Seja bem-vindo, ${textInput}!`);
    console.log(name.length);
  };

  return (
    //Essa é a View principal, que ocupa toda a tela
    <View style={styles.container}>
      {/* Esse é o botão que vai abrir o meu modal e vai deixar a visibilidade como "true" */}
      <Image
        style={styles.img}
        source={require("./src/assets/images/logo.png")}
      />

      <Text style={styles.titulo}>Qual a melhor opção?</Text>
      <Button title="Abrir modal" onPress={() => visModal(true)} />

      {/* true or false*/}
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.texto}>Isabella ;D</Text>
            <Button title="Fecha esse trem" onPress={() => visModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
