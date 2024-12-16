import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TabBar = () => (
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabActive}>
      <Text style={styles.tabTextActive}>Daily</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Monthly</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Total</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Note</Text>
    </TouchableOpacity>
  </View>
);

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
