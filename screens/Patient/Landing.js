import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'
import {AntDesign, FontAwesome5} from "@expo/vector-icons"


const Welcome = ({navigation, route}) => {

  const {name, email} = route.params

  return (
    <View>
      <View style={tw `items-center bg-black h-1/2`}>
        <Image
           style={{
            width:500,
            height:400,
            resizeMode: 'contain',
          }} 
          source={require('./../../assets/drplogo1.png')}>
        </Image>
      </View>

      <View>
        <Text style={tw `font-bold text-center py-24 text-4xl`}>{name || "Shrey Shah"}</Text>
      </View>

      <View style={tw `justify-center`}>
        <TouchableOpacity style={[
                              tw `absolute w-52 bg-black p-8 rounded-2xl right-24`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Record",route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>My Records</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute w-52 bg-black p-4 rounded-2xl left-24`,
                              {marginHorizontal : "30%"}]}
                              onPress={() => navigation.navigate("Family",route.params)}>
                              
          <Text style={tw `font-semibold text-center text-xl text-white`}>Add Family History</Text>
        </TouchableOpacity> 
  
        <TouchableOpacity style={[
                              tw `absolute top-20 w-52 bg-black p-6 rounded-2xl left-24`,
                              {marginHorizontal : "2%"}]}
                              onPress={() => navigation.navigate("CameraPage",route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Scan My Disease</Text>
        </TouchableOpacity>        
      </View>

      <View>
        <TouchableOpacity style={tw `absolute top-56 left-8`}>
          <AntDesign name="setting" size={45} />
        </TouchableOpacity>

        <TouchableOpacity style={tw `absolute top-56 left-48`}
                     onPress={() => navigation.navigate("Faq",route.params)}>
          <AntDesign name="question" size={45} />
        </TouchableOpacity>

        <TouchableOpacity style={tw `absolute top-56 right-8`}
                     onPress={() => navigation.navigate("Security",route.params)}>
          <FontAwesome5 name="user-lock" size={45} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})