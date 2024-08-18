import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Logo.style';

const Logo = () => {
    return(
        <View style={styles.container}>
            <Icon name="food-off-outline" color="#ffffff" size={100}/>
            <Text style={styles.text}>Diyetim</Text>
        </View>
    )
}

export default Logo;