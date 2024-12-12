import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import styles from './ProfilePage.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'

const ProfilePage = ({navigation}) => {
  const logOut = () => {
    auth().signOut()
    navigation.navigate("AppAuthStack")
  }

  const userDetails = useSelector(state=>state.info.userDetails);

  return (
    <View style={styles.container}>

      <View style={styles.header_container}>
        <Text style={styles.header}>Diyetim</Text>
      </View>
      
      <View style={styles.icon_container}>
        <Icon style={styles.icon}name="account-circle-outline" color="#ffffff" size={90}/>
        <Text style={styles.name}>{userDetails.name}</Text>
      </View>

      

      <View style={styles.details_main_container}>

        <View style={styles.details_container}>
          <Text style={styles.detail_header}>Cinsiyet: </Text>
          <Text style={styles.detail_txt}>{userDetails.gender}</Text>
        </View>

        <View style={styles.details_container}>
          <Text style={styles.detail_header}>Doğum Günü: </Text>
          <Text style={styles.detail_txt}>{userDetails.birthday}</Text>
        </View>

        <View style={styles.details_container}>
          <Text style={styles.detail_header}>Kilo: </Text>
          <Text style={styles.detail_txt}>{userDetails.weight} kg</Text>
        </View>
        
        <View style={styles.details_container}>
          <Text style={styles.detail_header}>Boy: </Text>
          <Text style={styles.detail_txt}>{userDetails.height} cm</Text>
        </View>

        <View style={styles.details_container}>
          <Text style={styles.detail_header}>Hedef: </Text>
          <Text style={styles.detail_txt}>{userDetails.aim}</Text>
        </View>

      </View>

      <View style={styles.button_container}>
        <Button text="Çıkış Yap" onPress={logOut} theme='secondary'/>
      </View>
      
    </View>

    
  )
}

export default ProfilePage


