import React from "react";
import { View, Text, Image, Alert } from "react-native";
import Button from "../Button";
import styles from './FoodDetailCard.style';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { format } from "date-fns";

const FoodDetailCard = ({item, selectedDate, mealType}) => {

  const foodDetail = {
    "foodName": item.food.label,
    "calories": item.food.nutrients.ENERC_KCAL,
    "protein": item.food.nutrients.PROCNT,
    "fat":item.food.nutrients.FAT,
    "carbs":item.food.nutrients.CHOCDF,
    "fib":item.food.nutrients.FIBTG
  }

  const formattedDate = format(selectedDate, "yyyy/MM/dd")

  const handleSaveFood = async (foodDetail) => {
    try {
 
      const userId = auth().currentUser.uid;
      const userRef = firestore().collection('users').doc(userId);

      await userRef.set({
        mealPlans:{
          [formattedDate]:{
            [mealType] : firestore.FieldValue.arrayUnion(foodDetail)
          }
        } 
      }, {merge:true})

      Alert.alert("Diyetim", "Yemek Kaydedildi!")
    } catch (error) {
      console.log("Yemek kaydetme sırasında hata oluştu", error)
    }
  }
  
    const defaultImage =
    'https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-884x1024.png';
  return (
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={{uri: item.food.image || defaultImage}}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={styles.header_container}>
            <Text style={styles.header}>{item.food.label}</Text>
        </View>
        
        <View style={styles.content_container}>
          <Text style={styles.content}>
            Enerji Değeri(kcal): {item.food.nutrients.ENERC_KCAL}
          </Text>
          <Text style={styles.content}>
            Protein Miktarı(g): {item.food.nutrients.PROCNT}
          </Text>
          <Text style={styles.content}>
            Yağ Miktarı(g): {item.food.nutrients.FAT}
          </Text>
          <Text style={styles.content}>
            Karbonhidrat Miktarı(g): {item.food.nutrients.CHOCDF}
          </Text>
          <Text style={styles.content}>
            Lif Miktarı(g): {item.food.nutrients.FIBTG}
          </Text>
        </View>
        <View style={styles.btn_container}>
          <Button text="Kaydet" onPress={()=>handleSaveFood(foodDetail)}/>
        </View>
      </View>
  )
}

export default FoodDetailCard;