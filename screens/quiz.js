import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text> Imagine This is a really cool question.</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Cool Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottoms}>
        <TouchableOpacity>
          <Text style={styles.colors}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.colors}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {marginVertical: 16},
  options: {
    marginVertical: 16,

    flex: 1,
  },
  bottoms: {
    marginBottom: 12,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
