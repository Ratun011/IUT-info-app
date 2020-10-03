import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';

const Home = (props)=>{
    return (
    <ScrollView style= {styles.pageview}>
        <View style= {styles.viewStyle}>
                <Image
                    source={require ('../../assets/iutlogo.png')}
                    style={styles.imageStyle}
                />
            <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE{"\n"}{"\n"}</Text>
            <TouchableOpacity onPress={function (){props.navigation.navigate("Profile");}}>
                <Text style = {styles.touchStyle}>My Profile{"\n"}</Text>
            </TouchableOpacity>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Semesters"
                    onPress={function (){props.navigation.navigate("Semesters");}}
                    color="green"
                    margin="15"
                />
            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Faculty List"
                    onPress={function (){props.navigation.navigate("FacultyList");}}
                    color="red"
                />
            </View>
        </View>
    </ScrollView>
        );
};


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 18,
            color:'darkorchid',
            textAlign: "center",
            margin: 20
        },
        imageStyle: {
            height: 410,
            width: 250,
            alignSelf: 'center',
        },
        viewStyle: {
            margin: 50,
            alignSelf: 'center'
        },
        pageview: {
            backgroundColor: 'white'
        },
        buttonStyle: {
            margin: 5,
        },
        
        touchStyle: {
            fontSize: 15,
            color:'black',
            textAlign: "center",
            alignContent: "center",
            margin: 5,
            backgroundColor: "skyblue",
        },
    }
);

export default Home;