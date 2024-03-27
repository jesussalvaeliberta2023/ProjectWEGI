import React, { useState } from 'react';
import { View, Text, Modal, Button, Image } from 'react-native';
import styles from '../style/StyleSheet';

export default function ComponentModel() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.logo}
        source={require("../assets/images/gas.png")}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão "Voltar" no Android
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <Text style={{ color:"green",}}>Compensa usar Alcool</Text>

          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
      
            <Button
              title="Fechar Modal"
              onPress={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

