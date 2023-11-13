import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ({ title = 'SEM NOME', icon = 'body', onPress }) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Ionicons name={icon} size={64} color="black" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 130,
    width: 134,
    backgroundColor: '#f5bd69',
    borderRadius: 20,
    margin: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 19,
    fontWeight: 'bold',
  },
});