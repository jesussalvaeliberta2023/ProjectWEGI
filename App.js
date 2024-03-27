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
import ComponentModel from "./src/components/componentModel";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [condicao, setCondicao] = useState("");

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  const calculo = () => {
    visModal(true);
    const div = alcool / gasolina;
    const condicao = div < 0.7 ? "Álcool" : "Gasolina";
    const resultado = "Compensa usar: " + condicao;
    setCondicao(resultado);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./src/assets/images/Logo.png")}
      ></Image>

      <View style={styles.home}>
        <Text style={styles.question}>Qual a melhor opção?</Text>

        <Text style={styles.insert}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setAlcool}
          value={alcool}
        ></TextInput>

        <Text style={styles.insertt}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setGasolina}
          value={gasolina}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={() => calculo()}>
          <Text style={styles.btn}>Calcular</Text>
        </TouchableOpacity>

        <Modal transparent={true} animationType="fade" visible={visible}>
          <View style={styles.modal}>
            <ComponentModel />
            <Text style={{ color: "white" }}>{condicao}</Text>
            <Text style={{ color: "white" }}>Alcool: R$ {alcool}</Text>
            <Text style={{ color: "white" }}>Gasolina: R$ {gasolina}</Text>

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
