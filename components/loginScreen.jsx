import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function LoginScreen() {
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
                <TouchableOpacity style={styles.btn}>
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
