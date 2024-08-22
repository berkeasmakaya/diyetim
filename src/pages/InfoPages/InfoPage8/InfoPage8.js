import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FloatingButton from '../../../components/FloatingButton';
import styles from './InfoPage8.style';
import Button from '../../../components/Button';
import color from "../../../styles/color";
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setBirthday } from '../../../redux/infoSlice';
import AuthModal from '../../../components/modal/Auth/AuthModal';
import LoginPage from '../../auth/Login/LoginPage';
import { Screen } from 'react-native-screens';


function InfoPage8({navigation}) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const dispatch = useDispatch();

    const handleSaveDate = (date) => {
        const formattedDate = format(date, "dd/MM/yyyy")
        dispatch(setBirthday(formattedDate))
    }

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const goToRegisterPage = () =>{
        navigation.navigate("AuthStack")
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>Doğum Günün Ne ?</Text>
            </View>
            <>
            <View style={styles.picker_container}>
                
                <DatePicker 
                    modal
                    date={date}
                    open={open}
                    onDateChange={setDate}
                    locale='tr'
                    mode='date'
                    onConfirm={(selectedDate)=>{
                        setOpen(false)
                        setDate(selectedDate)
                        Alert.alert("Diyetim", "Doğum Gününüz Kaydedildi!",[{text:"Tamam"}])
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }}
                    confirmText='Kaydet'
                    cancelText='İptal Et'
                    buttonColor={color.themeColor}
                    dividerColor={color.themeColor}
                    title="Doğum gününüzü seçiniz"
                    theme='light'
                />
                
            </View>
            <Button text="Doğum Günü Seç" onPress={()=>setOpen(true)}/>
            </>
            <View style={styles.btn_container}>
                <FloatingButton icon="arrow-right" onPress={()=>{handleSaveDate(date); toggleModal()}}/>
                <AuthModal 
                    visible={isModalVisible} 
                    onCLose={toggleModal} 
                    btn_txt="E-Posta Kullan" 
                    header_txt="Bir Hesap Oluştur"
                    onPress={goToRegisterPage}
                />
            </View>
            
        </View>
    )
}

export default InfoPage8;
