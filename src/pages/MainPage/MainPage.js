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
  
  const handleGoSelectMealPage = () => {
    navigation.navigate("SelectFoodPage", {selectedDate: date.toISOString()})
  }

  const handleGoMealDetailPage = () => {
    navigation.navigate("MealDetailPage", {selectedDate: date.toISOString()})
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
        <MealCard text="Kahvaltı" onPressCard={handleGoMealDetailPage} onPressPlus={handleGoSelectMealPage}/>
        <MealCard text="Ara Öğün" onPressCard={handleGoMealDetailPage} onPressPlus={handleGoSelectMealPage}/>
        <MealCard text="Öğlen" onPressCard={handleGoMealDetailPage} onPressPlus={handleGoSelectMealPage}/>
        <MealCard text="Akşam" onPressCard={handleGoMealDetailPage} onPressPlus={handleGoSelectMealPage}/>
      </View>
        
      {/*  */}
    </View>
  )
}

export default MainPage