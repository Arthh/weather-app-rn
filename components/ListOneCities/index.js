import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../../utils/index';

const ListOneCities = ({ city, navigation }) => {

  const pushToClime = () => {
    navigation.navigate('Clime', {
      lat: city.lat,
      lng: city.lng
    })
  }

  return (
  <TouchableOpacity onPress={pushToClime} >
    <View style={styles.container}>
      <View style={styles.infoCity}>
        <Text> {city.name} </Text>
        <Text> {city.state_code} - {city.country} </Text>
      </View>

      <AntDesign 
      name="arrowright"
      size={30}
      color={colors.PRIMARY_COLOR}
      />

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