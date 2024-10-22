import React from 'react';
import {Text, View} from 'react-native';
import styles from './FoodDetailPage.style';
import FoodDetailCard from '../../components/FoodDetailCard';

function FoodDetailPage({route}) {
  const {item, selectedDate} = route.params;
  return(
    <View style={styles.container}>
        <FoodDetailCard item={item} selectedDate={selectedDate}/>
    </View>
    
  )
}

export default FoodDetailPage;
