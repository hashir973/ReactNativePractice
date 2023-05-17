
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { windowWidth } from "../constant/Dimensions";


export default function CustomTab({
  selectionMode,
  option1,
  option2,
  option3,
  onSelectSwitch,
}) {
  const SWITCH_WIDTH = windowWidth * 0.95;
  const SWITCH_HEIGHT = windowWidth * 0.11;
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    console.log(value)
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <ScrollView>
    <View
      style={{
        height: SWITCH_HEIGHT,
        width: SWITCH_WIDTH,
        borderWidth: 0.6,
        borderColor:'#2BB789',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 4,
      }}>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#2BB789' : 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'white' : '#2BB789',
            fontSize: getSelectionMode == 1 ? 19 : 16,
            fontWeight: getSelectionMode == 1 ? 'bold' : 16,

          }}>
          {option1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#2BB789' : 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#2BB789',
            fontSize: getSelectionMode == 2 ? 19 : 16,
            fontWeight: getSelectionMode == 2 ? 'bold' : 16,
          }}>
          {option2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? '#2BB789' : 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 3 ? 'white' : '#2BB789',
            fontSize: getSelectionMode == 3 ? 19 : 16,
            fontWeight: getSelectionMode == 3 ? 'bold' : 16,
          }}>
          {option3}
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
