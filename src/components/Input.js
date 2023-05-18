import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React ,{useState} from 'react';
import {windowHeight, windowWidth} from '../constant/Dimensions';
import Buttons from './Buttons';
import UserDetails from '../screens/HooksPracticeApp/UserDetails';
import { useNavigation } from '@react-navigation/native';


const Input = () => {
  const navigation = useNavigation()
  const [textInput, setTextInput] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNo: '',
    ParkingEnterTime: '',
    ParkingExitTime: '',
    ParkingTotalHours: '',
    VehicleNo: '',
  },[])

  console.log('TEXT',textInput)


  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View>
      <View style={styles.text_input}>
        <TextInput
        onChangeText={text => {
            setTextInput({...textInput,FirstName: text});
          }}
          placeholder="Enter First Name"
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
            setTextInput({...textInput,LastName: text});
          }}
          placeholder="Enter Last Name"
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
            setTextInput({...textInput,Email: text});
          }}
          placeholder="Enter Email"
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
            setTextInput({...textInput,PhoneNo: text});
          }}
          placeholder="Enter Phone No"
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
            setTextInput({...textInput,ParkingEnterTime: text});
          }}
          placeholder="Enter Parking Enter Time"
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
            setTextInput({...textInput,ParkingExitTime: text});
          }}
          placeholder="Enter Parking Exit Time"
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
            setTextInput({...textInput,ParkingTotalHours: text});
          }}
          placeholder="Enter Parking Total Hours"
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
            setTextInput({...textInput,VehicleNo: text});
          }}
          placeholder="Enter Your Vehicle No"
          placeholderTextColor="#2BB789"
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />


      </View>

      <Buttons 
        enter = {'Enter'}
        onPress={()=>{
          navigation.navigate('UserDetails',{parkingDetails:textInput})
        }}
      />

    </View>
    </ScrollView>
  );
};

export default Input;

const styles = StyleSheet.create({
  text_input: {
    padding: 2,
    borderColor: '#2BB789',
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    borderBottomWidth: 1.5,
    alignSelf: 'center',
    marginTop: 40,
  },
});
