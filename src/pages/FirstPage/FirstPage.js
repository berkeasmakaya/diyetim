import React from 'react';
import {View } from 'react-native';
import Logo from '../../components/Logo';
import styles from './FirstPage.style';
import Button from '../../components/Button';

function FirstPage({navigation}){

    const goToNamePage = () => {
        navigation.navigate("RegisterPage1")
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Logo />
            </View>
            <View style={styles.button_container}>
                <Button text="Yeni bir kullanıcıyım" onPress={goToNamePage}/>
                <Button text="Zaten bir hesabım var" theme='secondary'/>
            </View>
        </View>
    )
}

export default FirstPage;