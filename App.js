import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

// Using the StyleSheet component to separate the style and avoid inline styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
