import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem2 = () => {
    const courses = [
        { name: "Hum 4247: Accounting", key: '1' },
        { name: "Hum 4249: Business Psychology and Communications", key: '2' },
        { name: "Math 4241 Integral Calculus and Differential Equations", key: '3' },
        { name: "CSE 4203 Discrete Mathematics" , key: '4'},
        { name: "CSE 4205 Digital Logic Design" , key: '5'},
        { name: "SWE 4201: Object Oriented Concepts I" , key: '6'},
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "gray",
    marginVertical: 25,
  },
  viewStyle: {
    margin: 50,
    alignSelf: 'center'
},
});
export default sem2;