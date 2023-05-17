import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {windowHeight, windowWidth} from '../constant/Dimensions';

const SearchUser = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState();

  // console.log(users);
  const [searchUsers, setSearchUsers] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=35')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(searchUsers)

  const Search = async () =>{
    await axios.get(`https://jsonplaceholder.typicode.com/photos/${searchUsers}`)
    .then(response => {
      setSingleUser(response?.data);
      // console.log("RESPO----?",singleUser,response?.data);
    }).catch((err)=>{
      console.log("err--->",err);
    })
  }

  return (
    <ScrollView>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={[styles.text_input]}>
            <TextInput
              onChangeText={(text)=>{
                setSearchUsers(text)
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
            onPress={Search}
            style={{ margin: 6, marginTop: 15 }}>
            <Text
              style={{
                color: '#2BB789',
                padding: 8,
                borderWidth: 0.8, 
                borderColor: '#2BB789',
                borderRadius: 8,
                fontWeight: 'bold',
                backgroundColor: '#fff'
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
        

        {!singleUser ?
          users.map((item, index) => {
          return (
            <>
              <View
                style={{
                  marginHorizontal: 10,
                  padding: 10,
                }}
                key={index}>
                <View>
                  <ImageBackground
                    source={{uri: item.url}}
                    resizeMode="cover"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      height: 150,
                      backgroundColor: 'grey',
                    }}>
                    <View
                      style={{paddingTop: 70, borderRadius: 5, padding: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>ID: </Text>
                        {item.id}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>Album ID:</Text>{' '}
                        {item.albumId}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>Title: </Text>
                        {item.title}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </>
          );
        }):
        <>
          {
            <View
                style={{
                  marginHorizontal: 10,
                  padding: 10,
                }}
                >
                <View>
                  <ImageBackground
                    source={{uri: singleUser.url}}
                    resizeMode="cover"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      height: 150,
                      backgroundColor: 'grey',
                    }}>
                    <View
                      style={{paddingTop: 70, borderRadius: 5, padding: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>ID: </Text>
                        {singleUser.id}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>Album ID:</Text>{' '}
                        {singleUser.albumId}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        <Text style={{color: '#000'}}>Title: </Text>
                        {singleUser.title}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
          }
        </>
        
        } 
      </View>
    </ScrollView>
  );
};

export default SearchUser;

const styles = StyleSheet.create({
  text_input: {
    borderRadius: 8,
    padding: 2,
    borderColor: '#2BB789',
    backgroundColor: '#fff',
    width: windowWidth * 0.7,
    height: windowHeight * 0.06,
    borderWidth: 0.8,
    alignSelf: 'center',
    marginTop: 8,
  },
});

















// var urlRegex = /^http[s]?:\/\/.*?\/([a-zA-Z-_]+).*$/;
// var input = 'http://stackoverflow.com/questions/31760030/extracting-for-url-from-string-using-regex' // <--- some string;
// var url = input.match(urlRegex);