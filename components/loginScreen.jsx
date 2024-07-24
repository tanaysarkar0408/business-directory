import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, Button, StyleSheet,Image, TouchableOpacity } from "react-native";
import {Colors} from './../constants/Colors';
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const UseWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }, []);
  };
  
  WebBrowser.maybeCompleteAuthSession();

  

export default function LoginScreen() {
    UseWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  return (
    <View>
        <View
        style={{
            display:'flex',
            alignItems: 'center',
            marginTop:120

        }}>
      <Image source={require('./../assets/images/login.png')}
      style={{width: 220, height: 450,borderRadius: 20,borderWidth: 6,borderColor:'#000000',}}
      />
    </View>
    <View style = {styles.subContainer}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold',
            textAlign:'center'}}>
                Your Ultimate Community 
            <Text style={{color:Colors.PRIMARY}}> Business Directory
                </Text> App</Text>
                <Text style={{
                    fontSize:15,
                    fontFamily:'outfit',
                    textAlign:'center',
                    marginVertical:15,
                    color:Colors.GRAY
                }}>
                    Find your favorite business near you and post your business to your community.
                </Text>
                <TouchableOpacity style={styles.btn}
                onPress={onPress}>
                    <Text style={{textAlign:'center',
                        color:'#fff',
                        fontFamily:'outfit',
                    }}>
                        Let's get started
                    </Text>
                </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer : {
        backgroundColor : '#ffffff',
        padding:20,
        marginTop:-20
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        padding:16,
        marginTop:20
    }
})
