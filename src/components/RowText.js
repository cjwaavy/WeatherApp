import React from "react";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";

const RowText = (props) => {
    const {message1, message2, containerStyle, message1Style, message2Style} = props
    const {} = styles
    return (
        <View style={containerStyle}>
          <Text style={message1Style}>{message1}</Text>                                                                                                                                                              
          <Text style={message2Style}> {message2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default RowText