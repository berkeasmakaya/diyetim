import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Input from '../../../../components/Input';
import styles from './RegisterPage1.style';
import FloatingButton from '../../../../components/FloatingButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { setName } from '../../../../redux/infoSlice';
import {useSelector, useDispatch } from 'react-redux';


const initialValue = {
  name: '',
};

const validationSchema = Yup.object().shape({
    name:Yup.string().required("Lütfen isminizi giriniz!")
})

function RegisterPage1({navigation}) {
  // const {name} = useSelector((state)=>state.info.userDetails)
  // console.log(name)
  // check if redux is working 


  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    dispatch(setName(values.name))
    navigation.navigate("RegisterPage2")
  }

  return (
    <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      {({values,handleChange,handleSubmit,handleBlur, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.header_container}>
            <Text style={styles.text_1}>İsim</Text>
            <Text style={styles.text_2}>
              Merhaba! Diyetim uygulamasını size özel olarak kişiselleştirmek
              için sizi tanımak istiyoruz.
            </Text>
          </View>
          <Input
            placeholder="İsim"
            autoCapitalize
            value={values.name}
            onType={handleChange('name')}
            onBlur={handleBlur('name')}
          />
          {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
          <View style={styles.info_container}>
            <Text style={styles.text_3}>Gizlilik</Text>
            <Text style={styles.text_4}>İsminiz gizli kalır ve yalnızca sizin tarafınızdan görülür.</Text>
          </View>
          <View style={styles.btn_container}>
            <FloatingButton icon="arrow-right" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default RegisterPage1;
