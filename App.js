import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerCenter}>
      {/* <Icon name="chevron-left" size={24} color="#ff0000" /> */}
      <Text style={styles.headerTitle}>Dec 2023</Text>
      <Text style={styles.headerTitle}>Dec 2024</Text>
      {/* <Icon name="chevron-right" size={24} color="#ff0000" /> */}
    </View>
    <View style={styles.headerRight}>
      <TouchableOpacity style={styles.iconButton}>
        {/* <Icon name="bookmark-outline" size={24} color="#ff0000" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        {/* <Icon name="search" size={24} color="#ff0000" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        {/* <Icon name="query-stats" size={24} color="#ff0000" /> */}
      </TouchableOpacity>
    </View>
  </View>
);

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

const SummaryCard = () => (
  <View style={styles.summaryCard}>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Income</Text>
      <Text style={styles.summaryLabel}>Expenses</Text>
      <Text style={styles.summaryLabel}>Total</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryIncome}>1,000.00</Text>
      <Text style={styles.summaryExpense}>10,000.00</Text>
      <Text style={styles.summaryTotal}>105,000.00</Text>
    </View>
  </View>
);

const TransactionItem = ({category, title, subtitle, amount, isExpense}) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLeft}>
      <View style={styles.categoryIcon}>
        <Text>{category}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <Text
      style={[
        styles.transactionAmount,
        isExpense ? styles.expenseText : styles.incomeText,
      ]}
    >
      £ {amount}
    </Text>
  </View>
);

const BottomTabBar = () => (
  <View style={styles.bottomTabBar}>
    <TouchableOpacity style={styles.bottomTab}>
      {/* <Icon name="receipt" size={24} color="#FF5757" /> */}
      <Text style={styles.bottomTabTextActive}>Trans.</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      {/* <Icon name="bar-chart" size={24} color="#999" /> */}
      <Text style={styles.bottomTabText}>Stats</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      {/* <Icon name="account-balance-wallet" size={24} color="#999" /> */}
      <Text style={styles.bottomTabText}>Accounts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomTab}>
      {/* <Icon name="more-horiz" size={24} color="#999" /> */}
      <Text style={styles.bottomTabText}>More</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <TabBar />
      <ScrollView>
        <SummaryCard />
        <View style={styles.dateHeader}>
          <Text style={styles.dateText}>10</Text>
          <Text style={styles.dayText}>Tue</Text>
          <Text style={styles.monthText}>12.2024</Text>
        </View>
        <TransactionItem
          category="💰"
          title="Loku aiya for the gift"
          subtitle="Accounts → Accounts"
          amount="32,000.00"
          isExpense={false}
        />
        <TransactionItem
          category="💰"
          title="Uni savings"
          subtitle="Cash"
          amount="15,000.00"
          isExpense={false}
        />
        <TransactionItem
          category="👔"
          title="Christmas dress"
          subtitle="Cash"
          amount="10,000.00"
          isExpense={true}
        />
        <TransactionItem
          category="🏅"
          title="Christmas bonus"
          subtitle="Accounts"
          amount="100,000.00"
          isExpense={false}
        />
      </ScrollView>
      <TouchableOpacity style={styles.fab}>
        {/* <Icon name="add" size={24} color="white" /> */}
      </TouchableOpacity>
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    borderBottomColor: '#FF5757',
  },
  tabText: {
    color: '#999',
  },
  tabTextActive: {
    color: '#FF5757',
  },
  summaryCard: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 16,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    color: '#666',
    flex: 1,
    textAlign: 'center',
  },
  summaryIncome: {
    color: '#4CAF50',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  summaryExpense: {
    color: '#F44336',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  summaryTotal: {
    color: '#0000FF',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  dayText: {
    backgroundColor: '#ddd',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  monthText: {
    color: '#666',
  },
  transactionItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  transactionSubtitle: {
    color: '#666',
    fontSize: 14,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  incomeText: {
    color: '#4CAF50',
  },
  expenseText: {
    color: '#FF5757',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF5757',
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
  bottomTabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  bottomTabTextActive: {
    fontSize: 12,
    color: '#FF5757',
    marginTop: 4,
  },
});
