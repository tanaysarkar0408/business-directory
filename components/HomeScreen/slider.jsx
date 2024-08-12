import { View, Text } from 'react-native'
import React from 'react'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, query} from 'firebase/firestore'
import { useEffect, useState } from 'react'
export default function Slider() {

    const [sliderList, setSliderList] = useState([]);
    useEffect(()=>{
        GetSliderList();
    },[]);

    const GetSliderList= async()=>{
        setSliderList([]);
        const q = query(collection(db,'Slider'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setSliderList(prev=>[...prev, doc.data()])
        });

    }
  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
      }}>Slider</Text>
    </View>
  )
}