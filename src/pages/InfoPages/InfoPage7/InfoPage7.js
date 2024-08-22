import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../../components/Input';
import FloatingButton from '../../../components/FloatingButton';
import styles from './InfoPage7.style';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {setHeight} from '../../../redux/infoSlice';

const initialValue = {
  height: '',
};

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .required('Lütfen boyunuzu giriniz')
    .moreThan(0, "Boyunuz 0'dan büyük olmalı")
    .lessThan(500, "Boyunuz 500'den küçük olmalı"),
});

function InfoPage7({navigation}) {
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    dispatch(setHeight(values.height));
    console.log(values.height)
    navigation.navigate("InfoPage8");
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}>
      {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.header_container}>
            <Text style={styles.header}>Şu andaki boyun ne?</Text>
          </View>
          <View style={styles.input_container}>
            <View style={styles.input}>
              <Input
                value={values}
                onType={handleChange('height')}
                onBlur={handleBlur('height')}
                keyboradType="numeric"
                placeholder="boyunuzu giriniz"
                fontSize={25}
              />
            </View>
            <Text style={styles.info}>
              ( Lütfen boyunuzu santimetre cinsinden giriniz! )
            </Text>
            {errors.height && touched.height && <Text style={styles.error}>{errors.height}</Text>}
          </View>
          <View style={styles.btn_container}>
            <FloatingButton icon="arrow-right" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default InfoPage7;
