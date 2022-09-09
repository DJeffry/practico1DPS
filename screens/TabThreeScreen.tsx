import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TextInput, Image } from "react-native";
import Colors from "../constants/Colors";
import Form from "../src/components/FormOrden";
import Result from "../src/components/ResultadoOrden.js";
import { useState, useEffect } from "react";

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<"TabThree">) {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(2);
  const [val3, setVal3] = useState(3);
  const [val1bkp, setVal1bkp] = useState(val1);
  const [val2bkp, setVal2bkp] = useState(val2);
  const [val3bkp, setVal3bkp] = useState(val3);
  const [van, setVan] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setErrorMessage("");
  };
  const calculate = () => {
    reset();
    if (Number(val1) <= 0) {
      setErrorMessage("Favor ingresar numeros mayores que 0");
      setVal1(1);
    } else if (Number(val2) <= 0) {
      setErrorMessage("Favor ingresar numeros mayores que 0");
      setVal2(1);
    } else if (Number(val3) <= 0) {
      setErrorMessage("Favor ingresar numeros mayores que 0");
      setVal3(1);
    } else {
      if (Number(val1) > Number(val2)) {
        setVan(val1);
        setVal1(val2);
        setVal2(val1);
      } else if (Number(val2) > Number(val3)) {
        setVan(val2);
        setVal2(val3);
        setVal3(val2);
      }
    }

    var calc1 = val1;
    var calc3 = val3;

    if (val3 > 10) {
      calc3 = Number(val3) + 10;
    }
    if (val1 < 50) {
      calc1 = Number(val1) - 5;
    }

    console.log("calculo: " + calc1 + ", " + val2 + ", " + calc3);

    setResultado({
      v1: calc1,
      v3: calc3,
    });
  };

  useEffect(() => {
    if (val1 && val2 && val3) calculate();
    else reset();
  }, [val1, val2, val3]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordenar Numeros</Text>
      <Text>Ingrese valores en los campos y se ordenaran</Text>
      <Text>Si el valor menor es menor que 50 se le restara 5</Text>
      <Text>Si el valor mayor es mayor que 10 se le sumara 10</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Form setVal1={setVal1} setVal2={setVal2} setVal3={setVal3} />
      <Result
        setVal1={setVal1}
        setVal2={setVal2}
        setVal3={setVal3}
        val1={val1}
        val2={val2}
        val3={val3}
        resultado={resultado}
        errorMessage={errorMessage}
      />
    </View>
  );
}
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
