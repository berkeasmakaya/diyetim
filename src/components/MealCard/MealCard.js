import React from "react";
import { Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './MealCard.style';
import color from "../../styles/color";

const MealCard = ({mealType, onPressCard, onPressPlus }) => {
    return(
        <TouchableOpacity onPress={onPressCard} style={styles.container}>
            <Text style={styles.text}>{mealType}</Text>
            <TouchableOpacity onPress={onPressPlus} style={styles.icon_container}>
                <Icon name="plus" size={25} color={color.themeColor}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MealCard;