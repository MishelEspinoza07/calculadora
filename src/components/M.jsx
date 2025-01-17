import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';


export const Botones = ({ symbol, bgcolor, textColor, action }) => {
  return (
    <Pressable 
      onPress={action}
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: bgcolor,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{symbol}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 35,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center"
  },
});
