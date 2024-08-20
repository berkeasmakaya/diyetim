import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './RegisterPage5.style';
import EventButton from '../../../../components/EventButton';
import FloatingButton from '../../../../components/FloatingButton';

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

function RegisterPage5() {

  const [event, setEvent] = useState(null);
  const onPress = event => {
    console.log(event)
    setEvent(event);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Etkinlik düzeyin ne?</Text>
      </View>
      <View>
        <EventButton 
            header={header1} 
            content={content1} 
            onPress={() => onPress('no_activity')}
            theme={event==="no_activity" ? "secondary": "primary"}
        />
        <EventButton 
            header={header2} 
            content={content2} 
            
            onPress={() => onPress('little_activity')}
            theme={event==="little_activity" ? "secondary": "primary"}
        />
        <EventButton 
            header={header3} 
            content={content3} 
            
            onPress={() => onPress('normal_activity')}
            theme={event==="normal_activity" ? "secondary": "primary"}
        />
        <EventButton 
            header={header4} 
            content={content4} 
            
            onPress={() => onPress('more_activity')}
            theme={event==="more_activity" ? "secondary": "primary"} 
        />
      </View>

      <View style={styles.btn_container}>
        <FloatingButton icon="arrow-right" />
      </View>
    </View>
  );
}

export default RegisterPage5;
