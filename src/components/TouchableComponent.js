import { TouchableOpacity, Text } from "react-native";

export default function Botao({styleTouchable, pressionar, calculate}) {
  return <TouchableOpacity style={styleTouchable} onPress={pressionar}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold", justifyContent: "center"}}>{calculate}</Text></TouchableOpacity>
}