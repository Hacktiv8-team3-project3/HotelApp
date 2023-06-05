import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './src/navigation/tabNavigator/HomeTab';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTab" component={HomeTab} />
        </Stack.Navigator>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      </NavigationContainer>
    </TailwindProvider>
  );
}
