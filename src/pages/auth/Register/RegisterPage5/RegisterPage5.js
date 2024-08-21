import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './RegisterPage5.style';
import EventButton from '../../../../components/EventButton';
import FloatingButton from '../../../../components/FloatingButton';
import { useDispatch } from 'react-redux';
import { setEvent } from '../../../../redux/infoSlice';
import * as Yup from 'yup';

const header1 = 'Aktivite Yok';
const header2 = 'Az Aktif';
const header3 = 'Aktif';
const header4 = 'Çok Aktif';

const content1 =
  'Günlük aktiviteler en düşük düzeyde çaba gerektirmektedir. Örneğin dinlenmek, masabaşı iş veya araba sürmek.';
const content2 =
  'Günlük aktiviteler biraz çaba gerektirmektedir. Örneğin bazen ayakta durak, ev işleri veya bazı hafif egzersizler.';
const content3 =
  'Günlük aktiviteler orta düzeyde performans gerektirmektedir. Örneğin ayakta durmak, fiziksel iş veya düzenli egzersiz.';
const content4 =
  'Günlük aktiviteler yoğun fiziksel çaba gerektirmektedir. Örneğin inşaat veya ağır egzersiz.';

function RegisterPage5({navigation}) {

  const [userEvent, setUserEvent] = useState(null);
  const onPress = userEvent => {
    setUserEvent(userEvent);
  };
  const validationSchema = Yup.object().shape({
    event: Yup.string().required(
      'Lütfen bir tanesini seçiniz.',
    ),
  });
  const dispatch = useDispatch();
  const goToRegisterPage6 = async () => {
    try {
      await validationSchema.validate({event:userEvent})
      dispatch(setEvent(userEvent));
      navigation.navigate("RegisterPage6")
    } catch (error) {
        Alert.alert("Diyetim",error.message,[
          {
            text:"Tamam"
          }
        ])
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Etkinlik düzeyin ne?</Text>
      </View>
      <View>
        <EventButton 
            header={header1} 
            content={content1} 
            onPress={() => onPress('aktivite yok')}
            theme={userEvent==="aktivite yok'" ? "secondary": "primary"}
        />
        <EventButton 
            header={header2} 
            content={content2} 
            
            onPress={() => onPress('az aktif')}
            theme={userEvent==="az aktif" ? "secondary": "primary"}
        />
        <EventButton 
            header={header3} 
            content={content3} 
            onPress={() => onPress('aktif')}
            theme={userEvent==="aktif" ? "secondary": "primary"}
        />
        <EventButton 
            header={header4} 
            content={content4} 
            onPress={() => onPress('çok aktif')}
            theme={userEvent==="çok aktif" ? "secondary": "primary"} 
        />
      </View>

      <View style={styles.btn_container}>
        <FloatingButton icon="arrow-right" onPress={goToRegisterPage6}/>
      </View>
    </View>
  );
}

export default RegisterPage5;
