import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
export default function Result(props) {
  const {
    setVal1,
    setVal2,
    setVal3,
    val1,
    val2,
    val3,
    resultado,
    errorMessage,
  } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <Text style={styles.Text}>Menor</Text>
        <Text style={styles.Text}>Intermedio</Text>
        <Text style={styles.Text}>Mayor</Text>
      </View>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Valor 1"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setVal1(e.nativeEvent.text)}
          value={val1}
        />
        <TextInput
          placeholder="Valor 2"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setVal2(e.nativeEvent.text)}
          value={val2}
        />
        <TextInput
          placeholder="Valor 3"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setVal3(e.nativeEvent.text)}
          value={val3}
        />
      </View>
      <View style={styles.content}>
      {resultado && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Aplicando condiciones</Text>
          <DataResult title="Valor Menor         : " value={resultado.v1} />
          <DataResult title="Valor Intermedio : " value={val2} />
          <DataResult title="Valor Mayor         : " value={resultado.v3} />
        </View>        
      )}
        <View>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      </View>
    </View>
  );
}
function DataResult(props) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
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
  Text: {
    height: 40,
    marginLeft: 12,
    padding: 10,
  },
  TextPercentage: {
    width: "40%",
    marginLeft: 5,
  },
  content: {
    marginHorizontal: 40,
  },

  boxResult: {
    padding: 30,
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },

  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
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
