
import React ,{useState, useEffect} from "react";
import { View, Text } from 'react-native';
import axios from "axios";


const UseEffect = () => {
    const [data, setData] = useState("");

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=> {
         setData(response.data[0].email)
    })

    });


      return (
    <View>
      <Text>UseEffect {data}</Text>
    </View>
  )
}

export default UseEffect;