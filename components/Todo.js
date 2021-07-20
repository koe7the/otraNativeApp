import React from 'react';
import {View, Button, Text} from 'react-native';

export default function Todo({todo, id, removeTodo}) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
      }}>
      <Text>{todo}</Text>
      <Button onPress={() => removeTodo(id)} title="remove" />
    </View>
  );
}
