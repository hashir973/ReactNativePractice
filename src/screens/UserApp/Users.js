import {View, Text} from 'react-native';
import React, { useState } from 'react';
import UsersList from '../../components/UsersList';
import SearchUser from '../../components/SearchUser';
import LimitUser from '../../components/LimitUser';
import CustomTab from '../../components/CustomTab';

const Users = () => {
  const [usersTab, setUsersTab] = useState(1);

  const onSelectSwitch = value => {
    setUsersTab(value);
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 20, fontSize: 25, fontWeight: 'bold', color: '#2BB789'}}>USERS APP</Text>
      </View>
      <View>
        <View style={{marginTop: 20}}>
          <View>
            <CustomTab
              selectionMode={1}
              option1="Users List"
              option2="Search Users"
              option3="Limit User"
              onSelectSwitch = {onSelectSwitch}
            />
          </View>

          {usersTab == 1 && <UsersList />}
          {usersTab == 2 && <SearchUser />}
          {usersTab == 3 && <LimitUser />}
        </View>
      </View>
    </View>
  );
};

export default Users;
