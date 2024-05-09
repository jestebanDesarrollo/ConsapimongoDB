import React from 'react'
import { StryleSheet, View, FlatList, Text } from 'react-native'

export default function Listusers() {
    return (
      <View style={styles.container}>
        <Text>Listado de usuarios</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

