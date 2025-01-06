import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TabBar = () => {
  const navigation = useNavigation();

  const onDaily = () => {
    console.log('Navigating to Transactions');
    navigation.navigate('Transactions');
  };

  const onMonthly = () => {
    console.log('Navigating to Monthly');
    navigation.navigate('Trans_Monthly');
  };

  const onTotal = () => {
    console.log('Navigating to Total');
    navigation.navigate('Trans_Total');
  };

  const onNote = () => {
    console.log('Navigating to Note');
    navigation.navigate('Trans_Note');
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabActive} onPress={onDaily}>
        <Text style={styles.tabTextActive}>Daily</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={onMonthly}>
        <Text style={styles.tabText}>Monthly</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={onTotal}>
        <Text style={styles.tabText}>Total</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={onNote}>
        <Text style={styles.tabText}>Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ffd700',
    backgroundColor: '#000',
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  tabActive: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ffd700',
  },
  tabText: {
    color: '#ffd700',
    fontFamily: 'Spicy Rice',
  },
  tabTextActive: {
    color: '#ffd700',
    fontFamily: 'Spicy Rice',
  },
});
