import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../../constant/Dimensions';
import axios from 'axios';

const Post = () => {
  const [input, setInput] = useState();
  const [userData, setUserData] = useState({
    title: '',
    body: '',
    id: 0,
  });

  const postData =  (userData) => {
    try {
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: userData.title,
          body: userData.body,
          userId: userData.id,
        }).then((res)=>{
            console.log('res',res);
        }).catch((err)=>{
            console.log('err',err?.message);
        })
//   await  fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: userData.title,
//           body: userData.body,
//           userId: userData.id,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       }).then(response => {
//         console.log('response',response);
//       })
//         .then(json =>{
//              console.log("jason",json)});
    } catch (error) {
        console.log('err',error)
    }
  };

  return (
    <View style={{marginTop: 80}}>
      <View style={styles.text_input}>
        <TextInput
          onChangeText={text => {
            setUserData({title: text});
          }}
          placeholder="Enter Title..."
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
            setUserData({body: text});
          }}
          placeholder="Enter Body..."
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
            setUserData({id: text});
          }}
          placeholder="Enter ID..."
          placeholderTextColor="#2BB789"
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={()=>{
            postData(userData)
        }}
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

export default Post;

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
// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'test title',
//           body: 'test body',
//           id: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//       .then(response => console.log(response.json()))
//       .catch((err)=>{
//         console.log('error', err)
//       });
