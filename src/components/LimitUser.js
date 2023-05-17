import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../constant/Dimensions';
import axios from 'axios';

const LimitUser = () => {
  const [searchLimit, setSearchLimit] = useState({
    IDLimits: 0,
    pagePerLimits: 0,
  });

  



  const applyLimits = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${searchLimit.IDLimits}&_limit=${searchLimit.pagePerLimits}`,
      )
      .then(res => {
        console.log('RES', res);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  return (
    <View>
      <View style={styles.text_input}>
        <TextInput
          onChangeText={text => {
            setSearchLimit({IDLimits: text})
          }}
          placeholder="Enter ID..."
          placeholderTextColor="#2BB789"
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
      </View>

      <View style={styles.text_input}>
        <TextInput
          onChangeText={text => {
            setSearchLimit({pagePerLimits:text})
          }}
          placeholder="Enter Limit..."
          placeholderTextColor="#2BB789"
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={applyLimits}
        style={{alignItems: 'center', margin: 20}}>
        <Text
          style={{
            color: '#2BB789',
            padding: 8,
            borderWidth: 0.9,
            width: windowWidth * 0.3,
            height: windowHeight * 0.06,
            textAlign: 'center',
            borderColor: '#2BB789',
            borderRadius: 8,
            fontWeight: 'bold',
            fontSize: 23,
          }}>
          Enter
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default LimitUser;

const styles = StyleSheet.create({
  text_input: {
    padding: 2,
    borderColor: '#2BB789',
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    borderBottomWidth: 1.5,
    alignSelf: 'center',
    marginTop: 25,
  },
});
