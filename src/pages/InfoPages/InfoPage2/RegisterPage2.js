import React from "react";
import { Text, View } from "react-native";
import styles from './InfoPage2.style';
import FloatingButton from "../../../components/FloatingButton";

function InfoPage2({navigation}) {
  const goToRegisterPage3 = () => {
    navigation.navigate("InfoPage3")
  }
  return(
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Profilinizi Ayarlama</Text>
      </View>
      <View style={styles.content_container}>
        <Text style={styles.content}>Hedefleriniz belirlemek için, TGD veya tavsiye edilen günlük değerlerinizi hesaplayarak başlayacağız. Bu, ideal olarak her gün ne kadar besin tüketmeniz gerektiğini gösterir Beslenme hedefiniz, aktivite düzeyiniz, yaşınız boyunuz, ve size özgü diğer özellikler bu değeri etkiler.</Text>
      </View>
      <View style={styles.btn_container}>
        <FloatingButton icon="arrow-right" onPress={goToRegisterPage3}/>
        <Text style={styles.footer}>Zaten bir hesabınız var mı? <Text style={{color:"#ffffff"}}>Oturum Aç</Text></Text>
      </View>
    </View>
  )
}

export default InfoPage2;