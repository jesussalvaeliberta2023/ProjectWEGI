// Importando tudo que foi usado
import { View } from "react-native";

// Importando o styles
import styles from "./src/style/StyleSheet";
import React, { useState } from "react";
import ComponentModal from "./src/components/ModalComponent";
import Texto from "./src/components/TextComponent";
import Input from "./src/components/InputComponent";
import Imagem from "./src/components/ImageComponent";
import Botao from "./src/components/TouchableComponent";

// Fazendo as funções
export default function App() {
  // As const para o model ser vizualizada e as const para a conta
  const [visible, setVisible] = useState(false);
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [condicao, setCondicao] = useState("");
  // Função para vizualizar o
  visModal = (vis) => {
    !visible ? setVisible(vis) : setVisible(vis);
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
      <Imagem
        styleimg={styles.logo}
        foto={require("./src/assets/images/Logo.png")}
      />

      {/*Os textos*/}
      <Texto styleText={styles.question} texto="Qual a melhor opção?" />

      {/*Os inputs com os values para a conta*/}
      <Texto styleText={styles.insert} texto="Álcool (preço por litro):" />
      <Input
        styleInput={styles.inputs}
        mudanca={setAlcool}
        valor={alcool}
        numero="numeric"
      />

      <Texto styleText={styles.insertt} texto="Gasolina (preço por litro):" />
      <Input
        styleInput={styles.inputs}
        mudanca={setGasolina}
        valor={gasolina}
        numero="numeric"
      />

      {/*Botão Touchable com a função do calculo e para abrir o modal*/}
      <Botao
        styleTouchable={styles.button}
        btn={styles.btn}
        pressionar={() => calculo()}
        calculate="Calcular"
      />

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
