import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

const Members = ({ admin }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.membersHolder}>
      <View style={[styles.holder, admin ? styles.holder : styles.holders]}>
        <View style={styles.imgCont}>
          <Image
            source={require("../../../assets/image.jpg")} // Replace with your image path
            style={styles.imageStyle}
            resizeMode="cover" // Adjust resizeMode as needed
          />
        </View>
        <View style={styles.desc}>
          <Text style={styles.text}>john deo</Text>
          {admin && <Text style={styles.text2}>lorem ipsum</Text>}
        </View>
      </View>
      {admin && (
        <View style={styles.adminTag}>
          <Text style={styles.admin}>group admin</Text>
        </View>
      )}
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  membersHolder: {
    backgroundColor: "#11141B",
    width: "100%",
    marginTop: 7,
    height: 75,
    padding: 6,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#181621",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // On iOS,
  },
  imgCont: {
    height: "94%",
    width: 63,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    alignSelf: "flex-start"
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
    fontSize: 13,
  },
  text2: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    textTransform: "capitalize",
    fontSize: 12,
  },
  holder: {
    flexBasis: "49%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  holders: {
    flexBasis: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  admin: {
    color: "#6FCF97",
    fontFamily: "Poppins_400Regular",
    textTransform: "capitalize",
    fontSize: 12,
  },
  adminTag: {
    padding: 6,
    backgroundColor: "#E9FFF2",
    borderRadius: 15,
    textAlign: "center",
  },
});
