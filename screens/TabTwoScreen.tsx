import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TextInput, Image } from "react-native";
import Colors from "../constants/Colors";
import Form from "../src/components/FormNeto";
import Result from "../src/components/ResultadoNeto.js";
import { useState, useEffect } from "react";

export default function TabOneScreen({navigation}: RootTabScreenProps<"TabTwo">) {
  const [ Base, setBase ] = useState(null);
  const [ ISSS, setISSS ] = useState(3);
  const [ AFP, setAFP ] = useState(4);
  const [ Renta, setRenta ] = useState(5);
  const [ resultado, setResultado ] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setErrorMessage("");
    setResultado(null);
  };

  const calculate = () => {
    reset();
    if (!Base) {
      setErrorMessage("Favor ingrese un valor para Base");
    } else if (!ISSS && ISSS > 0) {
      setErrorMessage("Favor ingrese un valor para ISSS");
    } else if (!AFP && AFP > 0) {
      setErrorMessage("Favor ingrese un valor para AFP");
    }else if (!Renta && Renta > 0) {
      setErrorMessage("Favor ingrese un valor para Renta");
    } else {
      const cISSS = ISSS / 100;
      const cAFP = AFP / 100;
      const cRenta = Renta /100;
      const neto = Base - Base * (cISSS + cAFP + cRenta);
      setResultado({
        Neto: neto.toFixed(2),
      });
    }
 
  };

  useEffect(() => {
    if (Base && ISSS && AFP && Renta) calculate();
    else reset();
  }, [Base, ISSS, AFP, Renta]);


return (
  <View style={styles.container}>
    <Text style={styles.title}>Salario Neto</Text>
    <Text>Ingrese valores en los campos y se calculara automaticamente</Text>
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
    
    <Form setBase={setBase} setISSS={setISSS} setRenta={setRenta} setAFP={setAFP} />
    <Result
      Base={Base}
      ISSS={ISSS}
      AFP={AFP}
      Renta={Renta}
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

