import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './FoodCard.style';

const FoodCard = ({food_name, food_image, onPress}) => {
    const defaultImage = "https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}> 
                <View style={styles.image_container}>
                    <Image source={{uri:(food_image)||defaultImage}} style={styles.image} resizeMode="contain"/>
                </View>
                <Text ellipsizeMode="clip" style={styles.food_name}>{food_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard;