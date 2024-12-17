import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionItem = ({category, title, subtitle, amount, isExpense}) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLeft}>
      <View style={styles.categoryIcon}>
        <Text>{category}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.transactionSubtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </View>
    <View style={styles.amountContainer}>
      <Text
        style={[
          styles.transactionAmount,
          isExpense ? styles.expenseText : styles.incomeText,
        ]}>
        Rs.{amount}
      </Text>
    </View>
  </View>
);

export default TransactionItem;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffd700',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 8,
  },
  transactionTitle: {
    fontSize: 16,
    marginBottom: 4,
    color: '#ffd700',
    fontFamily: 'Source Code Pro',
  },
  transactionSubtitle: {
    color: '#d4d4d4',
    fontSize: 14,
    fontFamily: 'Source Code Pro',
  },
  amountContainer: {
    flexShrink: 0,
    minWidth: 100,
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontFamily: 'Source Code Pro',
  },
  incomeText: {
    color: '#1bfc06',
  },
  expenseText: {
    color: '#ff0000',
  },
});
