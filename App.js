import 'react-native-gesture-handler';
import React, {useEffect,useState} from "react"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ErrorScreen from './src/screens/ErrorScreen';

const Stack = createStackNavigator()
const App = () => {
  const[weather, loading, errorMsg] = useGetWeather()
  console.log("Error message: " + errorMsg)
  if (weather && weather.list && !loading){
    return(
      <Tabs weather = {weather}/>
      
    )
  }
  
  return (
    // <NavigationContainer>
    //         <Stack.Navigator>
    //           <Stack.Screen name="Error" component={ErrorItem}/>
    //           <Stack.Screen name="Tabs" component={Tabs}/>
    //         </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
    {errorMsg ? (<ErrorItem errorMsg={errorMsg}/>):
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