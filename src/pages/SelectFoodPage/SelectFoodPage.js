import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Input from '../../components/Input';
import useFetch from '../../hooks/useFetch';
import { format } from 'date-fns';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FoodCard from '../../components/FoodCard';
import styles from './SelectFoodPage.style';

function SelectFoodPage({navigation, route}) {
  const [query, setQuery] = useState('');
  const {loading, data, error} = useFetch(query);
  const {selectedDate} = route.params
  const formattedDate = format(selectedDate, "dd/MM/yyyy")
  
  const initalValue = {
    food: '',
  };

  const validationSchema = Yup.object().shape({
    food: Yup.string().required('Lütfen bir yemek adı giriniz!'),
  });

  const handleSearch = (values) => {
    setQuery(values.food);
  };
  const handleGoDetailPage = (item) => {
    navigation.navigate('FoodDetailPage', {item, selectedDate});
  }

  const renderFood = ({item}) => {
    return <FoodCard food_name={item.food.label} food_image={item.food.image} onPress={()=>handleGoDetailPage(item)}/>
  };

  return (
    <Formik
      initialValues={initalValue}
      validationSchema={validationSchema}
      onSubmit={handleSearch}>
      {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
        <View>
          <Text style={styles.selected_date}>Seçilen Tarih: {formattedDate}</Text>
          <Input
            placeholder="Yemek ara..."
            value={values}
            onType={handleChange('food')}
            onBlur={handleBlur('food')}
            onSubmitEditing={handleSubmit}
            returnKeyType="search"
          />
          {errors.food && touched.food && <Text>{errors.touched}</Text>}
          {!loading && data &&
            <FlatList 
              data={data.hints} 
              renderItem={renderFood} 
              contentContainerStyle={{paddingBottom:90}}
            />
          }
          {error && <Text>Hata: {error.message}</Text>}
        </View>
      )}
    </Formik>
  );
}
export default SelectFoodPage;
