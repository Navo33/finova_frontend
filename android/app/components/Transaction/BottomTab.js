import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTabBar = () => (
  <View style={styles.bottomTabBar}>
    <TouchableOpacity style={styles.bottomTab}>
      <MaterialIcons name="receipt-long" size={27} color="#ffd700" />
      <Text style={styles.bottomTabTextActive}>Transactions</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      <MaterialIcons name="bar-chart" size={27} color="#d4d4d4" />
      <Text style={styles.bottomTabText}>Stats</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      <MaterialIcons name="account-balance-wallet" size={24} color="#d4d4d4" />
      <Text style={styles.bottomTabText}>Accounts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      <MaterialIcons name="more-horiz" size={24} color="#d4d4d4" />
      <Text style={styles.bottomTabText}>More</Text>
    </TouchableOpacity>
  </View>
);

export default BottomTabBar;

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ffd700',
    paddingVertical: 8,
    backgroundColor: '#000',
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: '#d4d4d4',
    marginTop: 4,
    fontFamily: 'Spicy Rice',
  },
  bottomTabTextActive: {
    fontSize: 12,
    color: '#ffd700',
    marginTop: 4,
    fontFamily: 'Spicy Rice',
  },
});
