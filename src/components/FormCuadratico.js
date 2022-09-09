import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default function Form(props) {
  const { setA, setB, setC } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad de A"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setA(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes de B"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setB(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes de C"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setC(e.nativeEvent.text)}
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
