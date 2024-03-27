import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)} // Exibir o modal ao pressionar o botão
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão "Voltar" no Android
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Este é um modal simples.</Text>
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
