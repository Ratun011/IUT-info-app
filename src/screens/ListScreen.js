import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
const ListScreen = () =>{
    //const uni_1 = "BUET"
    //const uni_2 = "KUET"
    //const uni_3 = "CUET"
    //const uni_4 = "RUET"
    //const uni_5 = "IUT"
    //const uni_6 = "DU"
    //const uni_7 = "KU"
    //const uni_8 = "RU"
    //<Text style = {styles.textStyle}>{uni_1}</Text>  in view
     //showsVerticalScrollIndicator = {false}   in Flatlist
    const uni = [{name: "Harvard", key: '1'}, 
                 {name: "Stanford", key: '2'}, 
                 {name: "Yale", key: '3'},
                ]
    return(
        <View style = {styles.viewStyle}>
            <FlatList           
            horizontal = {true}
            data = {uni}
            renderItem = {function({ item }){
                return <Text style = {styles.textStyle}>{item.name}</Text>
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'blue',
            marginVertical: 30,
        },
        viewStyle:{
            borderColor: 'red',
            borderWidth: 5,
        }
    }
)
export default ListScreen