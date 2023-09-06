import React from "react";
import { Octicons } from '@expo/vector-icons';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, bodyWrapper, description, message, highLow, highLowWrapper} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        {/* <Text>Current Weather</Text> */}
        <Octicons name="sun" size={100} style={{marginTop: 20}}color="black" />
        <Text style={temp}> 6</Text>
        <Text style={feels}>feels like 5</Text>
        <RowText message1="High: 8" 
        message2="Low: 6" 
        message1Style={highLow}
        message2Style={highLow}
        containerStyle={highLowWrapper}/>
      </View>
        <RowText  message1={"Its sunny" }
        message2={WeatherType.ThunderStorm.message}
        message1Style={description} 
        message2Style={message}
        containerStyle={bodyWrapper}/>
      {/* <View style={bodyWrapper}>
          <Text style={description}>Its sunny</Text>
          <Text style={message}>Its perfect t-shirt weather</Text>
        </View> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: "pink",
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  temp:{
    color: 'black',
    fontSize: 50
  },
  feels:{
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
    fontSize: 30
  },
  highLow:{
      color: 'black',
      fontSize: 20
  },
  highLowWrapper:{
      flexDirection: 'row'
  },
})
export default CurrentWeather