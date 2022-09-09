import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default function Form(props) {
  const { setBase, setISSS, setAFP, setRenta } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Salario Base"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setBase(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="% ISSS"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setISSS(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="% AFP"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setAFP(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="% Renta"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setRenta(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
});
const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});
