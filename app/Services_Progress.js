import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const {width} = Dimensions.get('window');

const data = [
  {
    label: 'Service No: 1',
    status: 'Your order has been placed',
    dateTime: 'Sat, 31 Dec 2021 11:00 AM',
  },
  {
    label: 'Service No: 2',
    status: 'Seller has processed your order',
    dateTime: 'Sat, 31 Dec 2021 11:30 AM',
  },
  {
    label: 'Service No: 3',
    status: 'Your item has been picked up by courier partner',
    dateTime: 'Sat, 31 Dec 2021 12:00 PM',
  },
  {
    label: 'Service No: 4',
    status: 'Your order is now in transit',
    dateTime: 'Sat, 31 Dec 2021 12:30 PM',
  },
  {
    label: 'Service No: 5',
    status: 'Your order has reached the destination city',
    dateTime: 'Sun, 1 Jan 2022 10:00 AM',
  },
  {
    label: 'Service No: 6',
    status: 'Your order is out for delivery',
    dateTime: 'Sun, 1 Jan 2022 11:00 AM',
  },
  {
    label: 'Service No: 7',
    status: 'Your order has been delivered',
    dateTime: 'Sun, 1 Jan 2022 12:00 PM',
  },
  {
    label: 'Service No: 8',
    status: 'Delivery confirmation pending',
    dateTime: 'Sun, 1 Jan 2022 12:30 PM',
  },
  {
    label: 'Service No: 9',
    status: 'Delivery confirmed',
    dateTime: 'Sun, 1 Jan 2022 1:00 PM',
  },
  {
    label: 'Service No: 10',
    status: 'Order completed',
    dateTime: 'Sun, 1 Jan 2022 1:30 PM',
  },
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#ff3232',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#ff3232',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#ff3232',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#ff3232',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ff3232',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#ff3232',
};

const Services_Progress = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const onScroll = event => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const stepHeight = 120; // Height of each card including margins
    const totalSteps = data.length;

    // Calculate position based on scroll
    const newPosition = Math.min(
      Math.floor(scrollY / stepHeight),
      totalSteps - 1,
    );

    if (newPosition !== currentPosition && newPosition >= 0) {
      setCurrentPosition(newPosition);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Summary</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            stepCount={data.length}
            direction="vertical"
            renderLabel={() => null} // This removes the labels
          />
        </View>
        <ScrollView
          style={styles.scrollView}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <View key={index} style={styles.lblContainer}>
              <Text style={styles.lblText}>{item.label}</Text>
              <Text style={[styles.status, {marginTop: 5}]}>{item.status}</Text>
              <Text style={styles.status}>{item.dateTime}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    height: 55,
    padding: 10,
    width: '100%',
    backgroundColor: '#000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ff3232',
    fontSize: 22,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    paddingTop: 0,
    borderRadius: 20,
    backgroundColor: '#000',
    elevation: 10,
  },
  stepIndicator: {
    marginRight: 20,
  },
  scrollView: {
    flex: 1,
  },
  lblContainer: {
    marginVertical: 10,
    padding: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  lblText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 15,
    color: 'gray',
  },
});

export default Services_Progress;
