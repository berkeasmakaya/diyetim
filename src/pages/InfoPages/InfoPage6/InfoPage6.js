import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../../components/Input';
import FloatingButton from '../../../components/FloatingButton';
import styles from './InfoPage6.style';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {setWeight} from '../../../redux/infoSlice';

const initialValue = {
  weight: '',
};

const validationSchema = Yup.object().shape({
  weight: Yup.number()
    .required('Lütfen kilonuzu giriniz')
    .moreThan(0, "Kilonuz 0'dan büyük olmalı")
    .lessThan(500, "Kilonuz 500'den küçük olmalı"),
});

function InfoPage6({navigation}) {
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    dispatch(setWeight(values.weight));
    navigation.navigate("InfoPage7");
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}>
      {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.header_container}>
            <Text style={styles.header}>Şu andaki kilon ne?</Text>
          </View>
          <View style={styles.input_container}>
            <View style={styles.input}>
              <Input
                value={values}
                onType={handleChange('weight')}
                onBlur={handleBlur('weight')}
                keyboradType="numeric"
              />
            </View>
            <Text style={styles.info}>
              ( Lütfen kilonuzu kilogram cinsinden giriniz! )
            </Text>
            {errors.weight && touched.weight && <Text style={styles.error}>{errors.weight}</Text>}
          </View>
          <View style={styles.btn_container}>
            <FloatingButton icon="arrow-right" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default InfoPage6;
