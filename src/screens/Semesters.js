import React from "react";
import {View, StyleSheet, Button} from "react-native";


const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="1st Semsester"
          onPress={function (){
            props.navigation.navigate("sem1");
            }
          }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
            onPress={function (){
              props.navigation.navigate("sem2");
              }
            }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
            onPress={function (){
              props.navigation.navigate("sem3");
              }
          }
          color="green"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "blue",
    marginVertical: 40,
  },
  viewStyle: {
      margin: 100,
      alignItems: 'center',
      backgroundColor: 'lightgray',
  },
  buttonStyle: {
    margin: 60,
    marginHorizontal: 20,
},
});
export default Semesters;