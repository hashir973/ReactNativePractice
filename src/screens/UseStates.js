import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const UseStates = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('Hashir');

  const Change = (event) =>{
    const newValue = event.target.value;
    setInputValue(newValue);

  };

  const Increment = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View>
        <Text>{counter}</Text>

        <Button title="Increment" onPress={Increment} />
      </View>

      <View>
        <TextInput 
        placeholder="enter something" 
        onChangeText={(text)=>{
            setInputValue(text)
        }}


        />
        <Text
        style={{
            fontSize:17,
            fontWeight:"bold"
        }}
        >{inputValue}</Text>
      </View>
    </View>
  );
};

export default UseStates;