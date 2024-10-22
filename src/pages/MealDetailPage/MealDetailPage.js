import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from './MealDetailPage.style';
import { Agenda } from "react-native-calendars";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


function MealDetailPage({route}){
    const {selectedDate} = route.params;
    const [mealPlans, setMealPlans] = useState({})

    const user = auth().currentUser;

    const fetchMealPlans = async()=> {
        
    }
    useEffect(()=>{
        const subscriber = firestore()
            .collection('users')
            .doc(user.uid)
            .onSnapshot(snapshot => {
                const data = snapshot.data()
                let newData = {};
                Object.keys(data.mealPlans).forEach(date => {
                    const formattedDate = date.replace(/\//g, "-");
                    newData[formattedDate] = data.mealPlans[date];
                });
                setMealPlans(newData)
            })
            return()=>subscriber();
            
    }, [])
    return(
        <View style={styles.container}>
            <Agenda 
                // items={{
                //     "2024-10-08":[{name: "Meeting 1", data:"Lorem ipsum dolor"}]
                // }}
                // renderItem={(item)=> (
                //     <Text>{item.name}</Text>
                // )}
                items={mealPlans}
                renderItem={(item)=>(
                    <View style={{flex:1}}>
                        <Text>{item.foodName}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default MealDetailPage;