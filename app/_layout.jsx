
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import LoginScreen from '../components/LoginScreen';

export default function RootLayout() {
  useFonts({
    'roboto':require('./../assets/fonts/Roboto-Bold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <SignedIn>
    <Stack  screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='(tabs)'/> 
    </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen/>
    </SignedOut>
    </ClerkProvider>
  );
}
