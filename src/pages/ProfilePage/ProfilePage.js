import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import auth from '@react-native-firebase/auth'

const ProfilePage = ({navigation}) => {
  const logOut = () => {
    auth().signOut()
    navigation.navigate("AppAuthStack")
  }
  return (
    <View>
      <Text>ProfilePage</Text>
      <Button text="Çıkış Yap" onPress={logOut}/>
    </View>
  )
}

export default ProfilePage