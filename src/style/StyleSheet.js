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
    marginRight: 175,
  },

  insertt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 50,
    marginRight: 152,
  },

  button: {
    backgroundColor: "#DC143C",
    width: 400,
    height: 40,
    borderColor: "#B22222",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 40,
  },

  btn:{
    color: "white",
    textAlign: "center",
    marginTop: 7,
    fontSize: 20,
    fontWeight: "bold",
  },

  inputs: {
    width: 400,
    height: 40,
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
    fontSize: 20,
  },
  
  text: {
    color: "green",
  }
});

//Exportação padrão
export default styles;
