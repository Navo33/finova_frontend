import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SummaryCard = () => (
  <View style={styles.summaryCard}>
    <View style={styles.summaryRow}>
      <View style={styles.summaryColumn}>
        <Text style={styles.summaryLabel}>Income</Text>
        <Text style={styles.summaryIncome}>Rs.1,000.00</Text>
      </View>
      <View style={styles.summaryColumn}>
        <Text style={styles.summaryLabel}>Expenses</Text>
        <Text style={styles.summaryExpense}>Rs.10,000.00</Text>
      </View>
      <View style={styles.summaryColumn}>
        <Text style={styles.summaryLabel}>Total</Text>
        <Text style={styles.summaryTotal}>Rs.105,000.00</Text>
      </View>
    </View>
  </View>
);

export default SummaryCard;

const styles = StyleSheet.create({
  summaryCard: {
    padding: 16,
    backgroundColor: '#333333',
    elevation: 10,
    shadowColor: '#ffd700',
    shadowOffset: {
      width: 10,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 16,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryColumn: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  summaryLabel: {
    color: '#d4d4d4',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Source Code Pro',
  },
  summaryIncome: {
    color: '#1bfc06',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Spicy Rice',
  },
  summaryExpense: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Spicy Rice',
  },
  summaryTotal: {
    color: '#ffd700',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Spicy Rice',
  },
});
