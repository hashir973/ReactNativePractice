import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../constant/Dimensions';

const FormCard = ({uid, name, email, startTime, endTime, tHours, tprice}) => {
  return (
    <View>
      <View style={styles.card}>
      <View style={{padding: 20}}>
        <Text>ID: {uid}</Text>
      </View>

      <View>
        <Text>Name: {name}</Text>
        
      </View>

      <View>
        <Text>Email: {email}</Text>
        
      </View>

      <View>
        <Text>Parking Starting Time: {startTime}</Text>
        
      </View>

      <View>
        <Text>Parking Ending Time: {endTime}</Text>
        
      </View>

      <View>
        <Text>Total Hours: {tHours}</Text>
        
      </View>

      <View>
        <Text>Total Price: {tprice}</Text>
        
      </View>

    </View>
    </View>
  );
};

export default FormCard;

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.45,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 50,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
