import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './src/navigation/tabNavigator/HomeTab';
import store from './src/redux/store';
import LoginScreen from './src/screens/loginScreen/loginScreen';
import DetailScreen from './src/screens/detailScreen/DetailScreen';
import BookingScreen from './src/screens/bookingScreen/BookingScreen';
// import ProfileScreen from './src/screens/profileScreen/ProfileScreen';
import BookingHistoryScreen from './src/screens/bookingHistoryScreen/BookingHistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              option={({ route }) => ({
                title: route.params.userId,
              })} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
          </Stack.Navigator>
          <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
