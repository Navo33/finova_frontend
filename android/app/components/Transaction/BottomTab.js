import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const BottomTabBar = () => {
  const navigation = useNavigation();

  const onTransactions = () => {
    console.log('Navigating to Transactions');
    navigation.navigate('Transactions');
  };

  const onStats = () => {
    console.log('Navigating to Stats');
    navigation.navigate('Stats_Income');
  };

  const onAccounts = () => {
    console.log('Navigating to Accounts');
    navigation.navigate('Accounts');
  };

  const onMore = () => {
    console.log('Navigating to More');
    navigation.navigate('More');
  };

  return (
    <View style={styles.bottomTabBar}>
      {/* Transactions Tab */}
      <TouchableOpacity style={styles.bottomTab} onPress={onTransactions}>
        <MaterialIcons name="receipt-long" size={27} color="#ffd700" />
        <Text style={styles.bottomTabTextActive}>Transactions</Text>
      </TouchableOpacity>

      {/* Stats Tab */}
      <TouchableOpacity style={styles.bottomTab} onPress={onStats}>
        <MaterialIcons name="bar-chart" size={27} color="#d4d4d4" />
        <Text style={styles.bottomTabText}>Stats</Text>
      </TouchableOpacity>

      {/* Accounts Tab */}
      <TouchableOpacity style={styles.bottomTab} onPress={onAccounts}>
        <MaterialIcons
          name="account-balance-wallet"
          size={24}
          color="#d4d4d4"
        />
        <Text style={styles.bottomTabText}>Accounts</Text>
      </TouchableOpacity>

      {/* More Tab */}
      <TouchableOpacity style={styles.bottomTab} onPress={onMore}>
        <MaterialIcons name="more-horiz" size={24} color="#d4d4d4" />
        <Text style={styles.bottomTabText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

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
