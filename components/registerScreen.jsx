// import React from 'react';
// import Registerpage from '../app/screen/register.jsx';

// const RegApp = () => {
//    return (
//       <Registerpage />
//    )
// }
// export default RegApp

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inputs from '../app/screen/login.jsx'; // Adjust the path as needed
import register from '../app/screen/register.jsx'; // Adjust the path as needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Inputs" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
