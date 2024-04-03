//Importação do StyleSheet, para podermos fazer o css
import { StyleSheet } from "react-native";

//Variável que nos permite criar a estilização para componentes
const styles = StyleSheet.create({
  //Classes
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  home: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },

  logo: {
    width: 170,
    height: 170,
    borderRadius: 20,
  },

  question: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  insert: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 30,
    marginRight: 175,
  },

  insertt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 50,
    marginRight: 152,
  },

  button: {
    backgroundColor: "#DC143C",
    width: 330,
    height: 50,
    borderColor: "#B22222",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 40,
  },

  buttonn: {
    width: 330,
    height: 50,
    borderColor: "#DC143C",
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 40,
  },

  inputs: {
    width: 325,
    height: 50,
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
    fontSize: 20,
    marginRight: 5,
  },

  com: {
    color: "#32CD32",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },

  look: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  prices: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 0,
  },

  pricess: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

//Exportação padrão
export default styles;
