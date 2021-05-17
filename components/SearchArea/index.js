import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity   } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';
import * as Location from 'expo-location';

const SearchArea = ({ navigation }) => {
  const [city, setCity] = useState();

  const navigateToClimeWithCity = () => {
    if(city.length === 0){
      return alert('Escreva o nome da cidade!')
    }
    navigation.navigate('Clime', {
      citySearch: city
    })
  }

  const navigateToClimeWithLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted'){
        alert('Acess to localtion is needed to run the app!');
        return
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      navigation.navigate('Clime', {
        lat: latitude,
        lng: longitude
      })

    }catch(err){
      alert(err.message)
    }
  }

  return (
    <View style={styles.container}>
     <Text style={styles.screenTitle}> Type your location here:</Text>
      <TextInput 
        style={styles.inputCity}
        name="cityName"
        value={city}
        onChangeText={cityName => setCity(cityName)}
      />

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.submitTouch}
          onPress={navigateToClimeWithCity}
        >
          <Text style={styles.textTouch}>Submit</Text>
        </TouchableOpacity>  

        <TouchableOpacity
          style={styles.submitTouch}
          onPress={navigateToClimeWithLocation}
        >
          <Text><MaterialIcons style={styles.textTouch} name="my-location" size={30} color="white" /></Text>
        </TouchableOpacity>  
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
  screenTitle: {
    fontSize: 20,
    paddingVertical: 10,
  },
  inputCity: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: '90%',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    padding: 10
  },
  buttonArea: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',    
  },
  submitTouch: {
    width: 110,
    height: 50,
    backgroundColor: '#FF2E4E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textTouch: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default SearchArea;