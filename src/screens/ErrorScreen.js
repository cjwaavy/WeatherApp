import React from 'react'
import { View, StyleSheet} from 'react-native'
import ErrorItem from '../components/ErrorItem'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from '../components/Tabs'

const Stack = createStackNavigator()
const ErrorScreen = (props) => {
  const {errorMsg} = props
  return (
    <View>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Tabs' >
                {() => <Tabs/>}
              </Stack.Screen>
              <Stack.Screen name="Error" component={ErrorItem} 
              />
            </Stack.Navigator>
        </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ErrorScreen