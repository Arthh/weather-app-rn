import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListOneCities = () => {
  return (
  <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.infoCity}>
        <Text>Rio De Janeiro</Text>
        <Text>RJ, Brazil</Text>
      </View>

      <Text> -- </Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 70,
    backgroundColor: '#DBDBDB',
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  },
  infoCity: {
    borderLeftWidth: 2,
    borderLeftColor: 'red',
    paddingHorizontal: 10
  }
})

export default ListOneCities;