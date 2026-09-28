import React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
const PlanSummary =({navigation})=>{
    return(        <View>
            <Text>
                Welcome plansummary
            </Text>
            <Button
  onPress={() => {
    navigation.navigate('UserSummary')
  }}
  title="Press Me"
/>
        </View>)
}
export default PlanSummary;