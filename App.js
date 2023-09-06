import React, {useEffect,useState} from "react"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator, SafeAreaView,View, Text, StyleSheet } from "react-native"
import * as Location from 'expo-location'
import UpcomingWeather from "./src/screens/UpcomingWeather"
import {WEATHER_API_KEY} from "@env"
import { useGetWeather } from "./src/hooks/useGetWeather"
const App = () => {
  const[weather, loading, errorMsg] = useGetWeather()
  // console.log(weather, loading, errorMsg)
  // if (loading){
  //   return(
  //     <View style={styles.container}>
  //     <ActivityIndicator size="large" color="blue"/>
  //     </View>
  //   )
    
  // }
  if (weather){
    return(
      console.log(weather)
      // <SafeAreaView>
      //   <Text>{JSON.stringify(weather)}</Text>
      // </SafeAreaView>
    )
  }
  return (
    <Tabs />
    // <UpcomingWeather />
    // <SafeAreaView>
    //   <Text styles={{color:"black"}}>{JSON.stringify(location)}</Text>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  }
})

export default App