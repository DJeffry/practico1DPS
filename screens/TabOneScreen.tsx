import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TextInput, Image } from "react-native";
import Colors from "../constants/Colors";
import Form from "../src/components/FormCuadratico";
//import Footer from "../src/components/footerCuadratico";
import Result from "../src/components/ResultadoCuadratico";
import { useState, useEffect } from "react";

export default function TabOneScreen({navigation}: RootTabScreenProps<"TabOne">) {
  const [ A, setA ] = useState(null);
  const [ B, setB ] = useState(null);
  const [ C, setC ] = useState(null);
  const [ resultado, setResultado ] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const reset = () => {
    setErrorMessage("");
    setResultado(null);
  };
  const calculate = () => {
    reset();
    if (!A) {
      setErrorMessage("Favor ingrese un valor para A");
    } else if (!B) {
      setErrorMessage("Favor ingrese un valor para B");
    } else if (!C) {
      setErrorMessage("Favor ingrese un valor para C");
    } else {
      const discriminante =Math.pow(B,2)-(4*A*C);
      if(discriminante < 0){
        setErrorMessage("Error: los valores que ha ingresado no tienen solucion");
      }else{
      const x1 = (-B+Math.pow(discriminante,1/2))/(2*A);
      const x2 = (-B-Math.pow(discriminante,1/2))/(2*A);
      setResultado({
        X1: x1.toFixed(2),
        X2: x2.toFixed(2),
      });
    }
    }
  };
  useEffect(() => {
    if (A && B && C) calculate();
    else reset();
  }, [A, B, C]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ecuacion cuadratica</Text>
      <Text>Ingrese valores en los campos y se calculara automaticamente</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Image
        style={styles.img}
        source={require("../src/imgs/formula-cuadratica.png")}
      />
      <Form setA={setA} setB={setB} setC={setC} />
      <Result
        A={A}
        B={B}
        C={C}
        resultado={resultado}
        errorMessage={errorMessage}
      />
      
    </View>
  );
}

const DATA = {
  id: "1",
  title: "formula cuadratica",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  img: {
    flex: 0,
    width: 200,
    resizeMode: "contain",
  },
});
