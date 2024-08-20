import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './EventButton.style';

const EventButton = ({header, content, theme, onPress}) => {
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity onPress={onPress} style={styles[theme].event_card}>
        <Text style={styles[theme].header}>{header}</Text>
        <Text style={styles[theme].content}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventButton;
