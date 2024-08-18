import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from './Input.style';

const Input = ({autoCapitalize, value,onType,isSecure,placeholder, onBlur}) => {

    const [isFocused, setIsFocused] = useState(false)

    return(
        <View style={styles.container}>
            <TextInput 
                autoCapitalize={autoCapitalize}
                value={value}
                style={[
                    styles.input,
                    isFocused && { borderColor: '#128019' },
                ]}
                placeholder={placeholder}
                placeholderTextColor="#888383"
                onChangeText={onType}
                secureTextEntry={isSecure}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=> {
                    setIsFocused(false)
                    onBlur 
                }}
            />
        </View>
    )
}

export default Input;