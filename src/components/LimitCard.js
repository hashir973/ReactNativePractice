import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../constant/Dimensions';

const LimitCard = ({linkurl, title, id, albumId}) => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
          padding: 10,
        }}>
        <View>
          <View
            style={{
              width: windowWidth * 0.9,
              height: windowHeight * 0.3,
              backgroundColor: '#fff',
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
              borderColor: '#2BB789',
              borderWidth: 1,
              shadow: {
                shadowColor: 'grey',
                shadowOpacity: 5,
                shadowOffset: {
                  width: windowWidth * 0.9,
                  height: windowHeight * 0.3,
                },
                elevation: 3,
              },
            }}>
            <ImageBackground
              source={{uri: linkurl}}
              resizeMode="cover"
              style={{
                justifyContent: 'center',
                width: windowWidth * 0.9,
                height: windowHeight * 0.22,
                backgroundColor: 'grey',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  <Text style={{color: '#000', fontSize: 18}}>ID:</Text>
                  {id}
                </Text>

                <View style={{paddingRight: 20}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 18,
                    }}>
                    <Text style={{color: '#000', fontSize: 18}}>Album ID:</Text>{' '}
                    {albumId}
                  </Text>
                </View>
              </View>
            </ImageBackground>

            <View style={{padding: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                <Text style={{color: '#000', fontSize: 18}}>Title: </Text>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LimitCard;
