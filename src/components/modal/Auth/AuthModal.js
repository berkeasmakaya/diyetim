import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
import styles from './AuthModal.style';

const AuthModal = ({visible, onCLose, onPress, header_txt, btn_txt}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onCLose}
      onBackButtonPress={onCLose}
      onBackdropPress={onCLose}>
      <View style={styles.container}>
        <Text style={styles.header_txt}>{header_txt}</Text>
        <View style={styles.btn_container}>
            <Button theme='secondary' text={btn_txt} onPress={onPress} />
        </View> 
      </View>
    </Modal>
  );
};

export default AuthModal;
