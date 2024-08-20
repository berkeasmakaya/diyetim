import React, {useMemo, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './RegisterPage4.style';
import FloatingButton from '../../../../components/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setGender} from '../../../../redux/infoSlice';
import * as Yup from 'yup';

function RegisterPage4({navigation}) {
  const [userGender, setUserGender] = useState(null);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required(
      'Lütfen bir tanesini seçiniz.',
    ),
  });

  const handleSelectGender = selectedGender => {
    setUserGender(selectedGender);
  };

  const handleSetGender = async () => {
    try {
      await validationSchema.validate({gender: userGender});
      dispatch(setGender(userGender));
      navigation.navigate('RegisterPage5');
    } catch (error) {
      Alert.alert('Diyetim', error.message, [
        {
            text:"Tamam",
        }
      ], {cancelable:true});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Cinsiyetin ne?</Text>
      </View>
      <View style={styles.icon_container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleSelectGender('kadın')}>
          <Icon
            name="gender-female"
            size={80}
            color={userGender === 'kadın' ? '#ffffff' : '#b4adad'}
          />
          <Text
            style={[
              styles.icon_label,
              userGender === 'kadın' && styles.selectedIcon,
            ]}>
            Kadın
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleSelectGender('erkek')}>
          <Icon
            name="gender-male"
            size={80}
            color={userGender === 'erkek' ? '#ffffff' : '#b4adad'}
          />
          <Text
            style={[
              styles.icon_label,
              userGender === 'erkek' && styles.selectedIcon,
            ]}>
            Erkek
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_container}>
        <FloatingButton onPress={handleSetGender} icon="arrow-right" />
      </View>
    </View>
  );
}

export default RegisterPage4;
