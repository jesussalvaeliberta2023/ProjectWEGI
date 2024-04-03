import { TouchableOpacity } from "react-native";

export default function Botao({Opacity, styleTouchable }) {
    return <TouchableOpacity style={styleTouchable}>{Opacity}</TouchableOpacity>
}