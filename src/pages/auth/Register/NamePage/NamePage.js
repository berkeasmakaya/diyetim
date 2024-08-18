import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Input from '../../../../components/Input';
import styles from './NamePage.style';
import FloatingButton from '../../../../components/FloatingButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

const handleSubmit = (values) => {
    console.log(values)
}

const initialValue = {
  name: '',
};

const validationSchema = Yup.object().shape({
    name:Yup.string().required("Lütfen isminizi giriniz!")
})

function NamePage() {
  return (
    <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
            value={values.name}
            onType={handleChange('name')}
            onBlur={handleBlur('name')}
          />
          {touched.name && errors.name && <Text>{errors.name}</Text>}
          <View style={styles.btn_container}>
            <FloatingButton icon="arrow-right" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default NamePage;
