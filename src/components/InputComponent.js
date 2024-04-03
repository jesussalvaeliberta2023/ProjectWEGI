import { TextInput } from "react-native";

export default function Input({ styleInput, mudanca, valor, numero }) {
  return <TextInput style={styleInput} onChangeText={mudanca} value={valor} keyboardType={numero}></TextInput>
}
