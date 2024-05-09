import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listusers from "./Listusers";
import User from './User'

const Stack = createNativeStackNavigator(); //Se genera la variable para la pila de pantalla

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Listusers" component={Listusers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}