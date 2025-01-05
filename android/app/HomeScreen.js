import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {' '}
      {/* Add style here */}
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Add this
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
