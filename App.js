// Importando tudo que foi usado
import { View, Image, Text, TouchableOpacity } from "react-native";
// Importando o styles
import styles from "./src/style/StyleSheet";
import React, { useState } from "react";
import ComponentModal from "./src/components/componentModal";
import Texto from "./src/components/TextComponent";
import Input from "./src/components/TextInputComponent";

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
      <Texto styleText={styles.question} texto="Qual a melhor opção?" />

      {/*Os inputs com os values para a conta*/}
      <Texto styleText={styles.insert} texto="Álcool (preço por litro):" />
      <Input
        styleInput={styles.inputs}
        onChangeText={setAlcool}
        value={alcool}
        keyboardType="numeric"
      />

      <Texto styleText={styles.insertt} texto="Gasolina (preço por litro):" />
      <Input
        styleInput={styles.inputs}
        onChangeText={setGasolina}
        value={gasolina}
        keyboardType="numeric"
      />

      {/*Botão Touchable com a função do calculo e para abrir o modal*/}
      <TouchableOpacity style={styles.button} onPress={() => calculo()}>
        <Text style={styles.btn}>Calcular</Text>
      </TouchableOpacity>

      {/*Código do modal*/}
      <ComponentModal
        result={condicao}
        visible={visible}
        cond={condicao}
        alc={alcool}
        gas={gasolina}
      />
    </View>
  );
}
