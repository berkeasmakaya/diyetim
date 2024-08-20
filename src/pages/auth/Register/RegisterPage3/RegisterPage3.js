import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './RegisterPage3.style';
import Button from '../../../../components/Button';
import FloatingButton from '../../../../components/FloatingButton';
import {useDispatch, useSelector} from 'react-redux';
import {setAim} from '../../../../redux/infoSlice';
import * as Yup from 'yup';

function RegisterPage3({navigation}) {
  const dispatch = useDispatch();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const validationSchema = Yup.object().shape({
    goal: Yup.string().required('Lütfen bir tanesini seçiniz.'),
  });

  const onPress = goal => {
    setSelectedGoal(goal);
  };
  const handleChooseAim = async () => {
    try {
      await validationSchema.validate({goal: selectedGoal});

      if (selectedGoal == 'gain') {
        dispatch(setAim('Kilo Almak'));
      } else if (selectedGoal == 'maintain') {
        dispatch(setAim('Şimdiki Kilomu Korumak'));
      } else if (selectedGoal == 'lose') {
        dispatch(setAim('Kilo Vermek'));
      }
      navigation.navigate('RegisterPage4');
    } catch (error) {
      Alert.alert('Diyetim', error.message, [
        {
          text:"Tamam"
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Hedefin Ne?</Text>
      </View>
      <View style={styles.choice_container}>
        <Button
          onPress={() => onPress('gain')}
          text="Kilo Almak"
          theme={selectedGoal === 'gain' ? 'secondary' : 'primary'}
        />
        <Button
          onPress={() => onPress('maintain')}
          text="Şimdiki Kilomu Korumak"
          theme={selectedGoal === 'maintain' ? 'secondary' : 'primary'}
        />
        <Button
          onPress={() => onPress('lose')}
          text="Kilo Vermek"
          theme={selectedGoal === 'lose' ? 'secondary' : 'primary'}
        />
      </View>
      <View style={styles.btn_container}>
        <FloatingButton onPress={handleChooseAim} icon="arrow-right" />
      </View>
    </View>
  );
}

export default RegisterPage3;
