import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import auth from '@react-native-firebase/auth'
import Input from '../../components/Input'

const ProfilePage = ({navigation}) => {
  const logOut = () => {
    auth().signOut()
    navigation.navigate("AppAuthStack")
  }
  return (
    <View>
      <Text>ProfilePage</Text>
      <Input placeholder="Kaç yaşındasınız" isSecure={false}/>
      <Button text="Çıkış Yap" onPress={logOut}/>
      
    </View>
  )
}

export default ProfilePage