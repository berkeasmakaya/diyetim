import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FloatingButton from '../../../../components/FloatingButton';
import styles from './RegisterPage8.style';
import Button from '../../../../components/Button';
import color from '../../../../components/styles/color';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthday } from '../../../../redux/infoSlice';

function RegisterPage8() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    
    const dispatch = useDispatch();
    const handleSaveDate = (date) => {
        const formattedDate = format(date, "dd/MM/yyyy")
        dispatch(setBirthday(formattedDate))
    }

    const {birthday} = useSelector((state)=>state.info.userDetails)
    console.log(birthday);
    
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
                    title="Doğu gününüzü seçiniz"
                    theme='dark'
                />
                
            </View>
            <Button text="Doğum Günü Seç" onPress={()=>setOpen(true)}/>
            </>
            <View style={styles.btn_container}>
                <FloatingButton icon="arrow-right" onPress={()=>handleSaveDate(date)}/>
            </View>
        </View>
    )
}

export default RegisterPage8;
