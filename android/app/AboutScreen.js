import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
