// basic react more

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const More = () => {
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
