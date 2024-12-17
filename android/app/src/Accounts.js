import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Accounts = () => {
  const summaryData = {
    assets: 105000.0,
    liabilities: 0.0,
    total: 105000.0,
  };

  const accounts = [
    {type: 'Cash', amount: 5000.0},
    {type: 'Cash', amount: 5000.0},
    {type: 'Accounts', amount: 100000.0},
    {type: 'Accounts', amount: 100000.0},
  ];

  const cards = [
    {balance: 0.0, outstanding: 0.0},
    {balance: 0.0, outstanding: 0.0},
  ];

  const formatCurrency = amount => {
    return `£ ${amount.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Accounts</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="bar-chart" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Assets</Text>
            <Text style={[styles.summaryValue, styles.blueText]}>
              {formatCurrency(summaryData.assets)}
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Liabilities</Text>
            <Text style={[styles.summaryValue, styles.redText]}>
              {formatCurrency(summaryData.liabilities)}
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(summaryData.total)}
            </Text>
          </View>
        </View>

        {accounts.map((account, index) => (
          <View key={`account-${index}`} style={styles.accountItem}>
            <Text style={styles.accountType}>{account.type}</Text>
            <Text style={styles.accountAmount}>
              {formatCurrency(account.amount)}
            </Text>
          </View>
        ))}

        {cards.map((card, index) => (
          <View key={`card-${index}`} style={styles.cardItem}>
            <Text style={styles.cardLabel}>Card</Text>
            <View style={styles.cardDetails}>
              <View style={styles.cardColumn}>
                <Text style={styles.cardDetailLabel}>Balance Payable</Text>
                <Text style={styles.cardAmount}>
                  {formatCurrency(card.balance)}
                </Text>
              </View>
              <View style={styles.cardColumn}>
                <Text style={styles.cardDetailLabel}>Outst. Balance</Text>
                <Text style={styles.cardAmount}>
                  {formatCurrency(card.outstanding)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="receipt" size={24} color="#666" />
          <Text style={styles.navText}>Trans.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="insert-chart" size={24} color="#666" />
          <Text style={styles.navText}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Icon name="account-balance-wallet" size={24} color="#ff6b6b" />
          <Text style={[styles.navText, styles.activeNavText]}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="more-horiz" size={24} color="#666" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#2196F3',
  },
  redText: {
    color: '#FF5252',
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountType: {
    fontSize: 16,
    color: '#333',
  },
  accountAmount: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
  },
  cardItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cardLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardColumn: {
    flex: 1,
  },
  cardDetailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNav: {
    color: '#ff6b6b',
  },
  activeNavText: {
    color: '#ff6b6b',
  },
});

export default Accounts;
