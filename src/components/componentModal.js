import { View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import styles from "../style/StyleSheet";
import Texto from "./TextComponent";
import Imagem from "./ImageComponent"

// Fazendo as funções
export default function componentModal({ result, visible, cond, alc, gas }) {
  console.log(result);

  return (
    //Código do modal
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modal}>
        {/*Imagem*/}
        <Imagem
          styleimg={styles.logo}
          foto={require("../assets/images/gas.png")}
        />

        {/*Textos que mostra o resultado que compensa e o quanto foi colocado de alcool e gasolina*/}
        <Texto styleText={styles.com} texto={cond} />
        <Texto styleText={styles.look} texto="Com os preços:" />
        <Texto styleText={styles.prices} texto={`Álcool: R$ ${alc}`} />
        <Texto styleText={styles.pricess} texto={`Gasolina: R$  ${gas}`} />

        {/*Botão Touchable para fechar*/}
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() => visModal(false)}
        >
          <Texto styleText={styles.btnn} texto="Calcular Novamento" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
