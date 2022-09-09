import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Result(props) {
  const { A, B, C, resultado, errorMessage } = props;
  return (
    <View style={styles.content}>
      {resultado && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Valor de A:" value={A} />
          <DataResult title="Valor de B:" value={B} />
          <DataResult title="Valor de C:" value={C} />
          <DataResult title="Valor de X1:" value={resultado.X1} />
          <DataResult title="Valor de X2:" value={resultado.X2} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
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
    content: {
        marginHorizontal: 40,
    },

    boxResult: {
        padding: 30,
    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
error: {
textAlign: 'center',
color: '#f00',
fontWeight: 'bold',
fontSize: 20,
},
});
