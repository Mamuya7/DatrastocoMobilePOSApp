import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../assets/styles/AppStyles'

const EmptySubimitedMessage = () => {
  return (
    <View style = {styles.emptyComponent}>
        <Text style = {styles.warningText}>No Orders Submited</Text>
    </View>
  )
}

export default EmptySubimitedMessage