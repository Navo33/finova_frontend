import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Pie from 'react-native-pie';
import {PieChart} from 'react-native-svg-charts';

const Stats_Expense = () => {
  const pieData = [
    {
      key: 1,
      type: 'Clothing',
      value: 20,
      svg: {fill: '#ff0000'},
    },
    {
      key: 2,
      type: 'Food',
      value: 30,
      svg: {fill: '#00ff00'},
    },
    {
      key: 3,
      type: 'Entertainment',
      value: 34,
      svg: {fill: '#0000ff'},
    },
    {
      key: 4,
      type: 'Beauty',
      value: 10,
      svg: {fill: '#ff7f00'},
    },
    {
      key: 5,
      type: 'Others',
      value: 6,
      svg: {fill: '#90ee90'},
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#ffd700" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stats</Text>
        <TouchableOpacity>
          <MaterialIcons name="bookmark" size={20} color="#ffd700" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Income LKR 100 000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>
            Expense LKR 40 000
          </Text>
        </TouchableOpacity>
      </View>

      {/* Pie Chart */}
      <View style={styles.pieContainer}>
        <PieChart style={styles.pie} data={pieData} />
        {/* <PieChart
            style={{height: 100, marginVertical: 8}}
            innerRadius={'70%'}
            data={pieData}
          /> */}
      </View>

      <View style={styles.dataContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pieData.map(item => (
            <View key={item.key} style={styles.card}>
              <View
                style={[styles.colorBox, {backgroundColor: item.svg.fill}]}
              />
              <View style={styles.info}>
                <Text style={styles.typeText}>{item.type}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Stats_Expense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffd700',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#333333',
  },
  tab: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#333333',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#ffd700',
  },
  tabText: {
    color: '#ffd700',
  },
  activeTabText: {
    color: '#ffd700',
  },
  pieContainer: {
    padding: 16,
  },
  pie: {
    height: 350,
    marginVertical: 15,
    marginHorizontal: 16,
  },
  dataContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#333333',
    shadowColor: '#ffd700',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  info: {
    marginLeft: 10,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  valueText: {
    fontSize: 14,
    color: '#666',
  },
});
