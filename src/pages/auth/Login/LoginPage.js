import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../../../components/Logo';
import styles from './LoginPage.style';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import Button from '../../../components/Button';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth'

const initalFormValues = {
  usermail: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  usermail: Yup.string()
    .email('Email Formatına Uygun Girilmeli!')
    .required('Email Alanı Boş Bırakılamaz!'),
  password: Yup.string()
    .required('Şifre Alanı Boş Bırakılamaz!')
    .min(6, 'Şifreniz Minimum 6 Karakter Olmalı!'),
});



const LoginPage = ({navigation}) => {

  const handleFormSubmit = async values => {
    try {
      auth().signInWithEmailAndPassword(
        values.usermail,
        values.password,
      )
      navigation.navigate("AppStack")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Formik
      initialValues={initalFormValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}>
      {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
        <>
          <View style={styles.container}>
            <Logo />
              <View style={styles.input_container}>
                <Input
                  value={values}
                  placeholder="E-mailinizi giriniz"
                  onType={handleChange('usermail')}
                  onBlur={handleBlur('usermail')}
                  keyboradType="email-address"
                  autoCapitalize="none"
                />
                {touched.usermail && errors.usermail && (
                  <Text style={styles.error}>{errors.usermail}</Text>
                )}
                <Input
                  value={values}
                  placeholder="Şifrenizi giriniz"
                  isSecure
                  onType={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize="none"
                />
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.buton_container}>
                <Button text="Giriş Yap" onPress={handleSubmit} />
              </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginPage;
