import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {windowHeight, windowWidth} from '../constant/Dimensions';

const UsersList = item => {
  const [usersData, setUsersData] = useState([]);
  console.log(usersData);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsersData(response.data);
        // console.log(response);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return (
    <View scrollEnabled={true}>
      <FlatList
        scrollEnabled={true}
        alwaysBounceVertical={true}
        data={usersData}
        keyExtractor={item => item.id}
        initialNumToRender={usersData.length}
        renderItem={({item}) => {
          //   console.log('item', item);
          return (
            <>
              <View style={{alignItems: 'center', padding: 10}}>
                <View style={styles.card_style} key={item.id}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 50 / 2,
                      aspectRatio: 1 / 1,
                      backgroundColor: 'black',
                    }}
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
                    }}
                  />
                 
                  {/* <View>
                    <Avatar
                      rounded
                      source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
                  </View>  */}
                  <View style={{flexDirection: 'column', paddingLeft: 15}}>
                    <Text style={{color: '#000'}}>item{item.name}</Text>
                    <Text style={{color: '#000'}}>{item.email}</Text>
                    <Text style={{color: '#000'}}>{item.website}</Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  card_style: {
    flexDirection: 'row',
    width: windowWidth * 0.93,
    height: windowHeight * 0.1,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#2BB789',
    padding: 10,
  },
});
