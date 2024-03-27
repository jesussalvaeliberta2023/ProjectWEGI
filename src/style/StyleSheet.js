//Importação do StyleSheet, para podermos fazer o css
import { StyleSheet } from "react-native";

//Variável que nos permite criar a estilização para componentes
export const styles = StyleSheet.create({
  //Classes
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },

  home: {
    justifyContent: "center",
    width: "25%",
  },

  logo: {
    width: 170,
    height: 170,
    borderRadius: 20,
    textAlign: "center",
  },

  question: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  insert: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 50,
  },

  button: {
    backgroundColor: "red",
  },
});

//Exportação padrão
export default styles;
