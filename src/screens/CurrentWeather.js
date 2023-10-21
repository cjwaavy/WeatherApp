import 'react-native-gesture-handler';
import React from "react";
import {Feather}   from '@expo/vector-icons'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";
import { useFonts, Quicksand_300Light,  Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { NotoSerif_400Regular } from '@expo-google-fonts/noto-serif';
const CurrentWeather = (props) => {
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    Quicksand_700Bold,
    NotoSerif_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const{weatherData} = props;
  const {wrapper, container, temp, feels, bodyWrapper, description, message, highLow, highLowWrapper, messageContainer} = styles
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: WeatherType(weatherData.weather[0].main).backgroundColor}]}>
      <View style={[container, {backgroundColor: WeatherType(weatherData.weather[0].main).backgroundColor}]}>
        {/* <Text>Current Weather</Text> */}
        <Feather name={WeatherType(weatherData.weather[0].main).icon} size={100} style={{marginTop: 20}}color="black" />
        <Text style={temp}>{`${weatherData.main.temp}°`}</Text>
        <Text style={feels}>{`feels like ${weatherData.main.feels_like}°`}</Text>
        <RowText message1={`High: ${weatherData.main.temp_max}°`} 
        message2={`Low: ${weatherData.main.temp_min}°`} 
        message1Style={highLow}
        message2Style={highLow}
        containerStyle={highLowWrapper}/>
      </View>
        <RowText  message1={WeatherType(weatherData.weather[0].main).message}
        // message2={WeatherType(weatherData.weather[0].main).message}

        message1Style={message} 
        message2Style={message}
        containerStyle={messageContainer}/>
      {/* <View style={bodyWrapper}>
          <Text style={description}>Its sunny</Text>
          <Text style={message}>Its perfect t-shirt weather</Text>
        </View> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  temp:{
    fontFamily: 'Avenir-Book',
    color: 'black',
    fontSize: 50
  },
  feels:{
    fontFamily: 'Avenir-Book',
    fontSize: 30,
    color: 'black'
  },
  bodyWrapper: {
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontFamily: 'Quicksand_300Light',
    fontSize: 30,
    textAlign: 'center',
  },
  highLow:{
      color: 'black',
      fontSize: 20,
      fontFamily: 'Avenir-Book',
  },
  highLowWrapper:{
      flexDirection: 'row'
  },
  messageContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  }
})
export default CurrentWeather