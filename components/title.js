import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View>
      <Text style={styles.container}>Quizzler</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
  },
});
