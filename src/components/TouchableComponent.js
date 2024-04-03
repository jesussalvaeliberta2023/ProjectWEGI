import { TouchableOpacity } from "react-native";

export default function Botao({styleTouchable, pressionar, calculate}) {
  return <TouchableOpacity style={styleTouchable} onPress={pressionar}>{calculate}</TouchableOpacity>
}