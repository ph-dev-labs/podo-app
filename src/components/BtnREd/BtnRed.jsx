import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import icons from Expo (adjust as needed)
import { Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

const IconComponent = ({ iconName }) => {
  if (!iconName) return null; // Render nothing if no icon provided
  return <AntDesign name={iconName} size={24} color="red" />;
};

const TextComponent = ({ text }) => {
  if (!text) return null; // Render nothing if no text provided
  return <Text style={styles.text}>{text}</Text>;
};

const BtnRed = ({ text, icon }) => {
    let [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold, Poppins_400Regular
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
  return (
    <TouchableOpacity style={styles.btn}>
      <IconComponent iconName={icon} />
      <TextComponent text={text} />
    </TouchableOpacity>
  );
};

export default BtnRed;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 15,
    borderRadius: 10,
    padding: 13,
    flexDirection: 'row', // To align icon and text horizontally
    alignItems: 'center', // To center items vertically
  },
  text: {
    color: 'red',
    fontFamily: "Poppins_400Regular",
    textTransform: "capitalize",
    marginLeft: 5, // Spacing between icon and text
  },
});
