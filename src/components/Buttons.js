import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../constant/Dimensions';


const Buttons = ({onPress, enter}) => {
  return (
    <View>
      <View
        style={{
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignItems: 'center',
            margin: 5,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              color: '#2BB789',
              padding: 5,
              borderWidth: 0.9,
              width: windowWidth * 0.6,
              height: windowHeight * 0.06,
              textAlign: 'center',
              borderColor: '#2BB789',
              borderRadius: 8,
              fontWeight: 'bold',
              fontSize: 26,
            }}>
           {enter}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
