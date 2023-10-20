import React from 'react'
import { View, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

const ErrorItem = () => {
  return (
    <View style={styles.container}>
        <View style={textConatiner}>
            <FontAwesome name="frown-o" size={24} color="black" />
            <Text>Error Occured Somewhere</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    textConatiner: {
        alignContent: 'center',
        textAlign: 'center'
    }
})
export default ErrorItem