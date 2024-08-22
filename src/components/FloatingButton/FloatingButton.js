import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';
import color from "../../styles/color";

const FloatingButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name={icon} size={50} color={color.themeColor}/>
        </TouchableOpacity>
    )
}

export default FloatingButton;