import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Back from "../components/Back/Back";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import Members from "../components/Members/Members";
import BtnRed from "../components/BtnREd/BtnRed";

const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.action}>
          <Back />
          <Text style={styles.messenger}>members</Text>
          <View>
            <View style={styles.actionPanel}></View>
            <View style={styles.actionPanel}></View>
            <View style={styles.actionPanel}></View>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          {/* Render multiple Members components */}
          <Members admin />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          {/* Add more Members components as needed */}
        </View>
        <View style={styles.view}>
          <Text style={styles.viewText}>view all (50)</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <BtnRed text="exit group" />
          <BtnRed text="report group" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    width: "100%",
    color: "#000000",
    paddingHorizontal: 16,
    paddingVertical: 26,
  },
  actionPanel: {
    backgroundColor: "#fff",
    height: 3,
    width: 3,
    margin: 1,
    borderRadius: 19,
  },
  messenger: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 9,
    padding: 3,
  },
  view: {
    alignSelf: "flex-end",
    marginTop: 9,
  },

  viewText: {
    color: "#0677E8",
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
    fontSize: 12,
  },
});
