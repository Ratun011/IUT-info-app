import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const FacultyList = () => {
    const teachers = [
      { name: "Ridwan Kabir", key: '5' },
        { name: "Sabbir Ahmed" , key: '1'},
        { name: "Bakhtiar Hasan" , key: '2'},
        { name: "Tajkia Rahman Toma", key: '4' },
        { name: "Mohayeminul Islam, ", key: '3' },
        { name: "Ridwan Karim Sony", key: '6' },
        { name: "Tasnim Ahmed", key: '7' },
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={teachers}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "crimson",
    margin: 35,
    backgroundColor: "white",
  },
  viewStyle: {
    margin: 50,
    alignSelf: 'center',
},
});
export default FacultyList;