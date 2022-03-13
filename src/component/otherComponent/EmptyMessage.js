import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../assets/styles/AppStyles'
import AppButton from '../coreComponent/AppButton'

const EmptyMessage = ({navigation}) => {
  return (
    <View style = {styles.emptyComponent}>
            <Text style = {styles.warningText}>No Orders Scanned</Text>
            <Text style = {styles.warningText}>Click the button bellow to scan orders</Text>
            <AppButton
                title = 'Scan order'
                press = {navigation}
            />
    </View>
  )
}

export default EmptyMessage