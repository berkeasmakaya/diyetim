import React from 'react';
import {View } from 'react-native';
import Logo from '../../components/Logo';
import styles from './FirstPage.style';
import Button from '../../components/Button';
import { Screen } from 'react-native-screens';

function FirstPage({navigation}){

    const goToInfoStack = () => {
        navigation.navigate("InfoStack")
    }

    const goToLoginPage = () => {
        navigation.navigate("AuthStack", {screen:"LoginPage"}) // login sayfasına gitmek istiyorum
    }
    

    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Logo />
            </View>
            <View style={styles.button_container}>
                <Button text="Yeni bir kullanıcıyım" onPress={goToInfoStack}/>
                <Button text="Zaten bir hesabım var" onPress={goToLoginPage} theme='secondary'/>
            </View>
        </View>
    )
}

export default FirstPage;