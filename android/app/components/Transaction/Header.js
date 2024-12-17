import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerCenter}>
      <TouchableOpacity>
        <Icon name="angle-left" size={24} color="#ffd700" iconStyle="solid" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Dec 2024</Text>
      <TouchableOpacity>
        <Icon name="angle-right" size={24} color="#ffd700" iconStyle="solid" />
      </TouchableOpacity>
    </View>
    <View style={styles.headerRight}>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="bookmark" size={20} color="#ffd700" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="search" size={20} color="#ffd700" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="query-stats" size={20} color="#ffd700" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 18,
    marginHorizontal: 16,
    color: '#ffd700',
    fontFamily: 'Spicy Rice',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});
