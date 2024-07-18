import { useFonts } from "expo-font";
import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from './../components/loginScreen';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


// This is the main layout component that wraps the entire app.

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
      <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
      }}/>
    </Stack>
      </SignedIn>
     <SignedOut>
      <LoginScreen></LoginScreen>
      </SignedOut>
    </ClerkProvider>
   
  );
}
