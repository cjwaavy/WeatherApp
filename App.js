import React, {useEffect,useState} from "react"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"
const App = () => {
  const[weather, loading, errorMsg] = useGetWeather()
  if (weather && weather.list && !loading){
    return(
      // <ErrorItem></ErrorItem>
      <Tabs weather = {weather}/>
    )
  }
  
  return (
      <View style={styles.container}>
      {errorMsg ? (<ErrorItem />):
      (<ActivityIndicator size="large" color="blue"/> )
      }
      </View>
      
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