import React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
const DashboardLanding =({navigation})=>{
    return(
        <View>
            <Text>
                Welcome dashboard landing
            </Text>
            <Button
  onPress={() => {
    navigation.navigate('PlanSummary')
  }}
  title="Press Me"
/>
        </View>
    )
}
export default DashboardLanding;