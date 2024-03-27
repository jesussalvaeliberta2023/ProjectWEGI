import { View, Image, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import styles from "../style/StyleSheet";

// Fazendo as funções
export default function componentModal({ result, visible, cond, alc, gas }) {
  console.log(result);

  return (
    //Código do modal
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modal}>
        {/*Imagem*/}
        <Image
          style={styles.logo}
          source={require("../assets/images/gas.png")}
        />

        {/*Textos que mostra o resultado que compensa e o quanto foi colocado de alcool e gasolina*/}
        <Text style={styles.com}>{cond}</Text>
        <Text style={styles.look}>Com os preços:</Text>
        <Text style={styles.prices}>Álcool: R$ {alc}</Text>
        <Text style={styles.pricess}>Gasolina: R$ {gas}</Text>

        {/*Botão Touchable para fechar*/}
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() => visModal(false)}
        >
          <Text style={styles.btnn}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
