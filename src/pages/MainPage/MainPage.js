import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './MainPage.style';
import MealCard from '../../components/MealCard';
import { Agenda, Calendar } from 'react-native-calendars';
import Button from '../../components/Button';
import DatePicker from 'react-native-date-picker';
import color from '../../styles/color';

const MainPage = ({navigation}) => {

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date())
  
  const handleGoSelectFoodPage = (mealType) => {
    navigation.navigate("SelectFoodPage", {selectedDate: date.toISOString(), mealType})
  }

  const handleGoMealDetailPage = (mealType) => {
    navigation.navigate("MealDetailPage", {selectedDate: date.toISOString(), mealType})
  }
  return (
    <View style={styles.container}>
      <>
        <Button text="Tarih Seç" onPress={()=>setOpen(true)}/>
          <DatePicker 
            modal
            open={open}
            date={date}
            mode='date'
            onConfirm={(date)=>{
              setOpen(false)
              setDate(date)
            }}
            onCancel={()=>setOpen(false)}
            locale='tr'
            confirmText='Kaydet'
            cancelText='İptal Et'
            buttonColor={color.themeColor}
            dividerColor={color.themeColor}
            title="Tarih seçiniz"
            theme='light'
          />
      </>
      <View>
        <MealCard mealType="Kahvaltı" onPressCard={()=>handleGoMealDetailPage("Kahvaltı")} onPressPlus={()=>handleGoSelectFoodPage("Kahvaltı")}/>
        <MealCard mealType="Ara Öğün" onPressCard={()=>handleGoMealDetailPage("Ara Öğün")} onPressPlus={()=>handleGoSelectFoodPage("Ara Öğün")}/>
        <MealCard mealType="Öğlen" onPressCard={()=>handleGoMealDetailPage("Öğlen")} onPressPlus={()=>handleGoSelectFoodPage("Öğlen")}/>
        <MealCard mealType="Akşam" onPressCard={()=>handleGoMealDetailPage("Akşam")} onPressPlus={()=>handleGoSelectFoodPage("Akşam")}/>
      </View>
        
      {/*  */}
    </View>
  )
}

export default MainPage