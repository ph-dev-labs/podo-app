import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import BackIcon from '../../../assets/Vector.svg';

const Back = () => {
  return (
    <TouchableOpacity
      style={styles.backHolder}
      onPress={() => {
        // Handle back button press action
      }}
      accessible={true}
      accessibilityLabel="Go back"
    >
      <Text style={styles.backArrow} >
      &larr;
      </Text>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  backHolder: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // Add more styles as needed
  },
  backArrow: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
