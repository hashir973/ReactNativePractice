import {View, Text} from 'react-native';
import React , {useEffect, useId, useState} from 'react';
import FormCard from '../../components/FormCard';

const UserDetails = ({route}) => {
  console.log('log=====>', route?.params?.parkingDetails);

  const[generateId, setGenerateID] = useState('');

 

  useEffect(()=>{
    function generateUserID() {
        const timestamp = Date.now().toString(); // Get current timestamp as a string
        const randomNum = Math.floor(Math.random() * 10000).toString(); // Generate a random number between 0 and 9999 as a string
        const userID = timestamp + randomNum; // Concatenate timestamp and random number
        return userID;
      }
      
      const userID = generateUserID();
      setGenerateID(useId)
      console.log(userID);
  },[])

  return (
    <View>
      <FormCard
        uid={generateId.toString()}
        name={
          route?.params?.parkingDetails.FirstName +
          route?.params?.parkingDetails.LastName
        }
        email={route?.params?.parkingDetails.Email}
        startTime={route?.params?.parkingDetails.ParkingEnterTime}
        endTime={route?.params?.parkingDetails.ParkingExitTime}
        tHours={
          route?.params?.parkingDetails.ParkingExitTime -
          route?.params?.parkingDetails.ParkingEnterTime
        }
        tprice={100 * route?.params?.parkingDetails.ParkingTotalHours}
      />
    </View>
  );
};

export default UserDetails;
