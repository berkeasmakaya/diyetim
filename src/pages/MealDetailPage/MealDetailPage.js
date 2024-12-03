import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from './MealDetailPage.style';
import { Agenda } from "react-native-calendars";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import FoodAgendaCard from "../../components/FoodAgendaCard";
import color from "../../styles/color";


function MealDetailPage({navigation,route}){
    
    const {selectedDate, mealType} = route.params;
    const [mealPlans, setMealPlans] = useState({})

    const user = auth().currentUser;

    
    useEffect(() => {
        const subscriber = firestore()
            .collection('users')
            .doc(user.uid)
            .onSnapshot(snapshot => {
                const data = snapshot.data();
                if (data && data.mealPlans) {
                    let newData = {};
                    Object.keys(data.mealPlans).forEach(date => {
                        const formattedDate = date.replace(/\//g, "-");
                        newData[formattedDate] = (data.mealPlans[date][mealType] || []).map(item => ({
                            ...item,
                            formattedDate,
                        }));
                    });
                    setMealPlans(newData);
                }
            });
        return () => subscriber();
    }, [user.uid, mealType]);

    const emptyData = ()=> {
        return(
            <Text style={{fontSize:15, fontWeight:"bold", color:"#000000", textAlign:"center", marginVertical:10}}>Kayıtlı Yiyecek Bulunamadı!</Text>
        )
    }

    return(
        <View style={styles.container}>
            <Agenda 
                items={mealPlans}
                renderItem={(item)=>(
                    <FoodAgendaCard item={item} mealType={mealType} formattedDate={item.formattedDate}/>
                )}
                renderEmptyData={emptyData}
                selected={selectedDate}
                theme={{
                    selectedDayBackgroundColor:color.themeColor,
                    todayTextColor:color.themeColor,
                    agendaTodayColor: color.themeColor,
                    agendaKnobColor: color.themeColor,
                }}
                
            />
        </View>
    )
}

export default MealDetailPage;