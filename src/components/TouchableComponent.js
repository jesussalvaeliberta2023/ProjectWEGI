import { TouchableOpacity, Text } from "react-native";

export default function Botao({styleTouchable, pressionar, calculate, btn}) {
  return <TouchableOpacity style={styleTouchable} onPress={pressionar}><Text style={btn}>{calculate}</Text></TouchableOpacity>
}