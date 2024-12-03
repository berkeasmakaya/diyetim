import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import styles from './FoodAgendaCard.style';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const FoodAgendaCard = ({item, mealType, formattedDate}) => {
    const user = auth().currentUser;
    const deleteFood = () => {
        Alert.alert("Diyetim", "Yemek Silinsin Mi?", [
            {
                text: "Hayır",
                style: "cancel",
            },
            {
                text: "Evet",
                onPress: async () => {
                    try {
                       const userId = user.uid;
                       const userRef = firestore().collection('users').doc(userId)
                       await userRef.update({
                        [`mealPlans.${formattedDate}.${mealType}`]:firestore.FieldValue.arrayRemove(item)
                       })
    
                        Alert.alert("Başarılı", "Yemek silindi!");
                    } catch (error) {
                        Alert.alert("Hata", "Yemek silinirken bir sorun oluştu.");
                        console.error(error);
                    }
                },
            },
        ]);
    };
    return(
        <TouchableOpacity onLongPress={deleteFood} style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>{item.foodName}</Text>
                <Text style={styles.header}>{mealType}</Text>
            </View>
            <View style={styles.detail_container}>
                <Text style={styles.detail}>Enerji Değeri(kcal): {item.calories}</Text>
                <Text style={styles.detail}>Protein Miktarı(g):{item.protein}</Text>
                <Text style={styles.detail}>Yağ Miktarı(g):{item.fat}</Text>
                <Text style={styles.detail}>Karbonhidrat Miktarı(g):{item.carbs}</Text>
                <Text style={styles.detail}>Lif Miktarı(g):{item.fib}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FoodAgendaCard;