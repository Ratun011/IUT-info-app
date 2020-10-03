import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem3 = () => {
    const courses = [
        { name: "Math 4341: Linear Algebra" ,key: '1' },
        { name: "CSE 4303: Data Structures" , key: '2'},
        { name: "CSE 4305: Computer Organization and Architecture",key: '3' },
        { name: "CSE 4307: Database Management System", key: '4' },
        { name: "CSE 4309: Theory of Computing", key: '5' },
        { name: "SWE 4301: Object Oriented Concepts II", key: '6' },
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
export default sem3;