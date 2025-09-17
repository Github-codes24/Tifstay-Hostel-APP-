import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileScreen from './src/screens/Profile';
import Editprofile from './src/screens/Editprofile';
import EditProfileScreen from './src/screens/Profile';
import ProfileScreenEdit from './src/screens/Editprofile';
import OnboardingScreen from './src/screens/OnboardingScreen';
import ChooseServiceScreen from './src/screens/ChooseServiceScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import VerifyAccountScreen from './src/screens/VerifyAccountScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import PasswordResetSuccessScreen from './src/screens/PasswordResetSuccessScreen';
import HostelDashboard from './src/screens/HostelDashboard';
import EarningsScreen from './src/screens/EarningsScreen';
import RoomScreen from './src/screens/RoomScreen';
import AccountScreen from './src/screens/AccountScreen';
import MyProfile from './src/screens/MyProfile';
import ChangePassword from './src/screens/ChangePassword';
import AddressScreen from './src/screens/AddressScreen';
import EditAddressScreen from './src/screens/EditAddressScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import TermsConditionsScreen from './src/screens/TermsConditionsScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import ChatScreen from './src/screens/ChatScreen';
import OffersScreen from './src/screens/OfferScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import BookingScreen from './src/screens/BoookingScreen';
import AddHostelService from './src/screens/AddHostelService';
import AddHostelStep2 from './src/screens/AddHostelStep2';
import HostelDetailsScreen from './src/screens/HostelDetailsScreen';
import ListingConfirmationScreen from './src/screens/ListingConfirmationScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HostelDashboard" component={HostelDashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={ProfileScreenEdit} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChooseServiceScreen" component={ChooseServiceScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyAccountScreen" component={VerifyAccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewPasswordScreen"  component={NewPasswordScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="PasswordResetSuccessScreen"  component={PasswordResetSuccessScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="EarningsScreen"  component={EarningsScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="RoomScreen"  component={RoomScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="AccountScreen"  component={AccountScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="MyProfile"  component={MyProfile}options={{ headerShown: false }}/>
          <Stack.Screen name="Editprofile"  component={Editprofile}options={{ headerShown: false }}/>
          <Stack.Screen name="ChangePassword"  component={ChangePassword}options={{ headerShown: false }}/>
          <Stack.Screen name="AddressScreen"  component={AddressScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="EditAddressScreen"  component={EditAddressScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="PrivacyPolicyScreen"  component={PrivacyPolicyScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="TermsConditionsScreen"  component={TermsConditionsScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="ContactUsScreen"  component={ContactUsScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="ChatScreen"  component={ChatScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="OffersScreen"  component={OffersScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="ReviewScreen"  component={ReviewScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="BookingScreen"  component={BookingScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="AddHostelService"  component={AddHostelService}options={{ headerShown: false }}/>
          <Stack.Screen name="AddHostelStep2"  component={AddHostelStep2}options={{ headerShown: false }}/>
          <Stack.Screen name="HostelDetailsScreen"  component={HostelDetailsScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="ListingConfirmationScreen"  component={ListingConfirmationScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="NotificationsScreen"  component={NotificationsScreen}options={{ headerShown: false }}/>



        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};



export default App;


