import {View, Text, FlatList, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// import { ScrollView } from 'react-native-gesture-handler';

const Practise = item => {
  const [data, setData] = useState([]);
  console.log(data)

  // const sortData = () => {
  //   const sortedData =data.sort((a, b) => a.localeCompare(b));
  //   setData(sortedData);
  // };

  const sortData = () =>{
    const tempData = data.filter((item) => {
      return item.name.toLocaleLowerCase().indexOf(item.toLocaleLowerCase()) > -1;
      setData(tempData);
  });
  



  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response?.data);
      })
      .catch(err => {
        console.log('err', err);
      });
      sortData()
  }, []);



  return (
    <ScrollView>
    <View>
      <Text style={{alignSelf: 'center'}}>Practice</Text>
      {data.map((item, index) => {
        return (
          <>
            <View
              style={{
                marginHorizontal: 10,
                borderBottomWidth: 1,
                padding: 5,
              }}
              key={index}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          </>
        );
      })}
      {/* <Button title="Sort A-Z" onPress={sortData} /> */}

      {/* <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          console.log(item);
          return (
            <>
            <View style={styles.card_style} key={item.id}>
        <Text style = {{color: "#000"}}>{item.email}</Text>
        <Text>ddd</Text>
      </View>
            </>
          );
        }}
      /> */}
    </View>
    </ScrollView>
  );
};
}


export default Practise;

const styles = StyleSheet.create({
  card_style: {
    // marginTop: 10,
    width: '95%',
    height: '50%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
});

// import {View, Text, Image, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import UseEffect from './UseEffect';
// import UseStates from './UseStates';

// const Practise = () => {
//   const [isOnOff, setIsOnOff] = useState(false);

//   return (
//         //conditional rendering tasks
//     <View>
//       <Text style={{alignSelf: 'center'}}>Practise</Text>
//       {/* <Image
//         style={{
//           height: '30%',
//           width: '30%',
//           borderRadius: 10,
//           objectFit: 'cover',
//           alignSelf: 'center',
//           marginTop: 30,
//         }}
//         source={isOnOff ?  require('../../assests/images/3.png'): require('../../assests/images/1.jpg')}
//       />
//       <TouchableOpacity
//       onPress={()=>{
//         setIsOnOff(!isOnOff)
//       }}
//        style={{alignItems: 'center'}}>
//         <Text style={{color: 'black', marginTop: 20}}>{isOnOff?"ON":"OFF"}</Text>
//       </TouchableOpacity> */}

// {/*
// 1-> api call hugy
// 2-> data (name, emiL, id ,name, phone)
// 3-> sort data by a-z
// 4-> on click p app text show full item
//  */}

//       <TouchableOpacity
//         onPress={() => {
//           setIsOnOff(true);
//         }}
//         style={{alignItems: 'center'}}>
//         <Text style={{color: 'black', marginTop: 20}}>UseEffect</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => {
//           setIsOnOff(false);
//         }}
//         style={{alignItems: 'center'}}>
//         <Text style={{color: 'black', marginTop: 20}}>UseStates</Text>
//         {isOnOff ? <UseEffect /> : <UseStates />}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Practise
