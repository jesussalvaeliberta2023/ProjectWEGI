import { Image } from "react-native";

export default function Imagem({ foto, styleimg }) {
  return (
    <Image style={styleimg} source={foto}/>
  );
}
