// Importando tudo que foi usado
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
// Importando o styles
import styles from "./src/style/StyleSheet";
import React, { useState } from "react";

// Fazendo as funções
export default function App() {
  // As const para o model ser vizualizada e as const para a conta
  const [visible, setVisible] = useState(false);
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [condicao, setCondicao] = useState("");

  // Função para vizualizar o model
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  // Função do cálculo da gasolina e do álcool
  const calculo = () => {
    visModal(true);
    const div = alcool / gasolina;
    const condicao = div < 0.7 ? "Álcool" : "Gasolina";
    const resultado = "Compensa usar: " + condicao;
    setCondicao(resultado);
  };

  return (
    // View principal
    <View style={styles.container}>
      {/*Imagem*/}
      <Image
        style={styles.logo}
        source={require("./src/assets/images/Logo.png")}
      />

      {/*Os textos*/}
      <Text style={styles.question}>Qual a melhor opção?</Text>

      {/*Os inputs com os values para a conta*/}
      <Text style={styles.insert}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={setAlcool}
        value={alcool}
        keyboardType="numeric"
      />

      <Text style={styles.insertt}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={setGasolina}
        value={gasolina}
        keyboardType="numeric"
      />

      {/*Botão Touchable com a função do calculo e para abrir o modal*/}
      <TouchableOpacity style={styles.button} onPress={() => calculo()}>
        <Text style={styles.btn}>Calcular</Text>
      </TouchableOpacity>

      {/*Código do modal*/}
      <Modal transparent={true} animationType="slide" visible={visible}>
        <View style={styles.modal}>
          {/*Imagem*/}
          <Image
            style={styles.logo}
            source={require("./src/assets/images/gas.png")}
          />

          {/*Textos que mostra o resultado que compensa e o quanto foi colocado de alcool e gasolina*/}
          <Text style={styles.com}>{condicao}</Text>
          <Text style={styles.look}>Com os preços:</Text>
          <Text style={styles.prices}>Álcool: R$ {alcool}</Text>
          <Text style={styles.pricess}>Gasolina: R$ {gasolina}</Text>

          {/*Botão Touchable para fechar*/}
          <TouchableOpacity
            style={styles.buttonn}
            onPress={() => visModal(false)}
          >
            <Text style={styles.btnn}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
