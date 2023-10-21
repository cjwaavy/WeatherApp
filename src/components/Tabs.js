import React from "react"
import UpcomingWeather from "../screens/UpcomingWeather"
import City from "../screens/City"
import CurrentWeather from "../screens/CurrentWeather"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Tabs = ({weather}) => {

    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        tabBarStyle:{
          backgroundColor: 'lightblue',          
        },
        headerStyle:{
          backgroundColor: 'lightblue'
        },
        headerTitleStyle:{
          fontWeight: 'bold',
          fontSize: 20,
          color: 'tomato',
        }
      }}
      >
        <Tab.Screen name="Current" 
        options={
          {
            title : "Current Weather", 
            tabBarLabel: "Current",
            tabBarIcon: ({focused}) => (
              <Feather name="droplet" size={25} color={focused ? "tomato" : "black"} />
            )
        }
      }
        >
          {() => <CurrentWeather weatherData={weather.list[0]}/>}
        </Tab.Screen>
        <Tab.Screen name="City" 
        options={{
          tabBarIcon: ({focused}) => (
            <Feather name="home" size={25} color={focused ? "tomato" : "black"} />
          )
        }}
        >
          {
            () => <City
            cityInfo = {weather.city}/>
          }
        </Tab.Screen>
        <Tab.Screen name="Upcoming" 
        // component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather name="clock" size={25} color={focused ? "tomato" : "black"} />
          )
        }}
        >
          {() => <UpcomingWeather weather = {weather} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
    )
}
export default Tabs