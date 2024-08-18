import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import styles from './Button.style';

const Button = ({onPress, text, loading, theme="primary"}) => {
    return(
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            {loading ? (
                <ActivityIndicator color="#ffffff"/>
            ):(
                <Text style={styles[theme].text}>{text}</Text>
            )}
            
        </TouchableOpacity>
    )
}

export default Button;