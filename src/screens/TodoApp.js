import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [updatetodos, setUpdateTodos] = useState('');
  const [changeField, setChangeField] = useState(false);

//   console.log('search0', search);

  const addTodo = () => {
    console.log('hello');
    todos.push(search);
    setSearch('');
  };

  const DeleteTodo = index => {
    console.log('index', index);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const updateTodo = (index, item) => {
    console.log('index', index, item, search);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1, updatetodos);
    setTodos(updatedTodos);
  };

  const afterUpdate = (index, item) => {
    console.log('index', index, item, search);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1, search);
    setTodos(updatedTodos);
    setChangeField(!changeField)
  };

  return (
    <View>
      <Text style={{alignSelf: 'center', margin: 12, fontSize: 20}}>
        TodoApp
      </Text>
      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          value={search}
          style={{
            margin: 10,
            borderWidth: 1,
            width: '75%',
            borderRadius: 12,
            paddingLeft: 10,
          }}
          placeholder="Enter Something"
          onChangeText={text => {
            setSearch(text);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            
            {changeField ? afterUpdate() : addTodo()}

          }}
          style={{alignItems: 'center', height: '60%'}}>
          <Text
            style={{
              color: 'black',
              borderWidth: 1,
              padding: 12,
              alignSelf: 'center',
              borderRadius: 8,
            }}>
            {changeField ? 'Done' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>

      {todos.map((item, index) => {
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                key={index}
                style={{
                  margin: 10,
                  width: '70%',
                  paddingLeft: 10,
                  borderRadius: 12,
                }}>
                <Text style={{borderWidth: 1, borderRadius: 10, padding: 10}}>
                  {item}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => DeleteTodo(index)}
                style={{height: '60%', marginRight: 5}}>
                <Text
                  style={{
                    color: 'black',
                    borderWidth: 1,
                    padding: 8,
                    borderRadius: 8,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setChangeField(!changeField);
                  setSearch(item);
                  updateTodo(index, item);
                }}
                style={{alignItems: 'center', height: '60%', marginRight: 15}}>
                <Text
                  style={{
                    color: 'black',
                    borderWidth: 1,
                    padding: 8,
                    borderRadius: 8,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </>
        );
      })}
    </View>
  );
};

export default TodoApp;


