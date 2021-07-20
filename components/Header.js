import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ///
  header: {
    padding: '6%',
    width: '100%',
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});
