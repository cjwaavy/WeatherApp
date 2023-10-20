import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import App from '../../App';
import Counter from '../demonstration/Counter';

const ErrorItem = (props) => {
    const {errorMsg} = props
    console.log(errorMsg)
    
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <FontAwesome name="frown-o" size={50} color="black" />
            <Text style={styles.textStyle}>Error Occured Somewhere</Text>
            <Text>{`Error message: ${errorMsg}`}</Text>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => {
                return (<Counter />)
            }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Press Me</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    textContainer: {
        flex: 1,
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30
    },
    button:{
        marginTop: 15,
        paddingHorizontal: 120,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: '50%',
        borderColor: 'black'
        
    },
    buttonText: {
        fontSize: 20,
        color: 'gray'
    }
})
export default ErrorItem