import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changleHandle = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="nowa rzecz..."
        onChangeText={changleHandle}
      />

      <Button
        onPress={() => submitHandler(text)}
        title="dodaj rzecz"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
