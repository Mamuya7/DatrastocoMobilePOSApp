import { View, Text } from 'react-native';
import React from 'react';

const NoticeText = (props) => {
  return (
    <View>
      <Text style ={{color: 'orange'}}>{props.text}</Text>
    </View>
  );
};

export default NoticeText;
