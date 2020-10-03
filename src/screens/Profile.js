import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: Ratun Rahman{"\n"}
            Student ID: 170042011{"\n"}
            Room No: 702 Western Hall{"\n"}
            Email: ratunrahman@iut-dhaka.edu
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "black",
    margin: 25,
    alignSelf: 'center',
  },
  viewStyle: {
    margin: 50,
    alignSelf: "center"
  },
  imageStyle: {
    height: 260,
    width: 260,
    alignSelf: 'center',
},
});
export default Profile;