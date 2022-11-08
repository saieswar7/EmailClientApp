import React from "react";
import { Text, View } from "react-native";
import Emails from "./Emails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailInfo from "./EmailInfo";
import Composing from "./Composing";

const Stack = createNativeStackNavigator();


const App = () => {

return(

  <NavigationContainer>
    <Stack.Navigator initialRouteName="Emails">
        <Stack.Screen name="Emails"  component={Emails} />
        <Stack.Screen name="Email-info"  component={EmailInfo}/>
        <Stack.Screen name="Composing"  component={Composing}/>
    </Stack.Navigator>

  </NavigationContainer>
  

)

}

export default App
