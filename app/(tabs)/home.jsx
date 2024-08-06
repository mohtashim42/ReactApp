import { View, Text } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily:'roboto'
      }}>Welcome home</Text>
    </View>
  )
}