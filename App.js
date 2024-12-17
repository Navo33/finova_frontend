import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PieChart} from 'react-native-svg-charts';

const Stats = () => {
  // Sample data - replace with actual data
  const data = {
    income: 115000.0,
    expenses: 10000.0,
    categories: [
      {
        key: 'Apparel',
        amount: 10000.0,
        percentage: 100,
        svg: {fill: '#FF6B6B'},
        value: 100,
        icon: 'checkroom',
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerControls}>
              <TouchableOpacity>
                <MaterialIcons name="chevron-left" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Dec 2024</Text>
              <TouchableOpacity>
                <MaterialIcons name="chevron-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.periodSelector}>
              <Text>Monthly</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Summary */}
          <View style={styles.summary}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Income</Text>
              <Text style={styles.summaryAmount}>
                £ {data.income.toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Expenses</Text>
              <Text style={[styles.summaryAmount, styles.expenseText]}>
                £ {data.expenses.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Pie Chart */}
          <View style={styles.chartContainer}>
            <PieChart
              style={styles.chart}
              data={data.categories}
              innerRadius="90%"
              padAngle={0}
              valueAccessor={({item}) => item.value}
            />
            {data.categories.map((category, index) => (
              <View key={index} style={styles.chartLabel}>
                <MaterialIcons name={category.icon} size={24} color="#1a1a1a" />
                <Text style={styles.chartLabelText}>
                  {category.percentage.toFixed(1)} %
                </Text>
              </View>
            ))}
          </View>

          {/* Category List */}
          <View style={styles.categoryList}>
            {data.categories.map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryLeft}>
                  <View
                    style={[
                      styles.percentageBadge,
                      {backgroundColor: category.svg.fill},
                    ]}>
                    <Text style={styles.percentageBadgeText}>
                      {category.percentage}%
                    </Text>
                  </View>
                  <View style={styles.categoryInfo}>
                    <MaterialIcons
                      name={category.icon}
                      size={24}
                      color="#1a1a1a"
                    />
                    <Text style={styles.categoryName}>{category.key}</Text>
                  </View>
                </View>
                <Text style={styles.categoryAmount}>
                  £ {category.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="receipt-long" size={24} color="gray" />
            <Text style={styles.navText}>Trans.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <MaterialIcons name="bar-chart" size={24} color="#FF6B6B" />
            <Text style={[styles.navText, styles.activeNavText]}>Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color="gray"
            />
            <Text style={styles.navText}>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="more-horiz" size={24} color="gray" />
            <Text style={styles.navText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  summary: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryItem: {
    flex: 1,
  },
  summaryLabel: {
    color: '#666',
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
  expenseText: {
    color: '#000',
  },
  chartContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    height: 250,
  },
  chartLabel: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartLabelText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  categoryList: {
    padding: 16,
    paddingBottom: 32, // Added padding at bottom for better scrolling
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
  },
  percentageBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    marginLeft: 8,
    fontSize: 16,
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    color: '#FF6B6B',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
  },
  activeNavText: {
    color: '#FF6B6B',
  },
});

export default Stats;
