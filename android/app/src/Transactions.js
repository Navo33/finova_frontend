import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import TransactionItem from '../components/Transaction/TransactionItem';
import Header from '../components/Transaction/Header';
import TabBar from '../components/Transaction/Tabbar';
import BottomTabBar from '../components/Transaction/BottomTab';
import SummaryCard from '../components/Transaction/SummaryCard';
import Fab from '../components/Transaction/ExpenseFab';

const Transactions = () => {
  const [isFabVisible, setFabVisible] = useState(false);

  const transactions = [
    {
      category: '💰',
      title: 'Loku aiya for the gift',
      subtitle: 'Accounts → Accounts',
      amount: '32,000.00',
      isExpense: false,
    },
    {
      category: '💰',
      title: 'Uni savings',
      subtitle: 'Cash',
      amount: '15,000.00',
      isExpense: false,
    },
    {
      category: '👔',
      title: 'Christmas dress',
      subtitle: 'Cash',
      amount: '10,000.00',
      isExpense: true,
    },
    {
      category: '🏅',
      title: 'Christmas bonus',
      subtitle: 'Accounts',
      amount: '100,000.00',
      isExpense: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Header />
      <TabBar />
      <SummaryCard />
      <View style={styles.dateHeader}>
        <Text style={styles.dateText}>10</Text>
        <Text style={styles.dayText}>Tuesday</Text>
        <Text style={styles.monthText}>12.2024</Text>
      </View>
      <ScrollView>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            category={transaction.category}
            title={transaction.title}
            subtitle={transaction.subtitle}
            amount={transaction.amount}
            isExpense={transaction.isExpense}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setFabVisible(!isFabVisible)}>
        <FeatherIcons name="plus" size={24} color="#333333" />
      </TouchableOpacity>
      {isFabVisible && <Fab />}
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffd700',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 20,
    marginRight: 8,
    color: '#333333',
    fontFamily: 'Spicy Rice',
  },
  dayText: {
    color: '#000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
    fontFamily: 'Satisfy',
    fontSize: 22,
  },
  monthText: {
    fontFamily: 'Spicy Rice',
    fontSize: 17,
    color: '#333333',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
