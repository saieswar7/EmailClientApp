import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Composing=()=>{
    return (<View style={{padding:10}}>
        <View style={{paddingBottom:10}}>
        <TextInput style={[styles.Emailinput,
        {height:40,paddingVertical:10,textAlignVertical:"top"}]}
        placeholder='To Address'
        multiline={true}
         />
        </View>
        <View style={{paddingBottom:10}}>
        <TextInput style={[styles.Emailinput,
        {height:40,paddingVertical:10,textAlignVertical:"top"}]}
        placeholder='Cc'
        multiline={true}
         />
        </View>
        <View style={{paddingBottom:10}}>
        <TextInput style={[styles.Emailinput,
        {height:40,paddingVertical:10,textAlignVertical:"top"}]}
        placeholder='Subject'
        multiline={true}
         />
        </View>
        <View>
        <TextInput style={[styles.Emailinput,
        {height:350,paddingVertical:10,textAlignVertical:"top"}]}
        placeholder='Body'
        multiline={true}
         />
         <View style={{paddingTop:20,left:200}}>
            <TouchableOpacity>
                <Text style={styles.button}>
                    Send
                </Text>
            </TouchableOpacity>
         </View>
        </View>
        
        </View>
    );




}
const styles = StyleSheet.create({
    Emailinput:{
        width:"100%",
        height:60,
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        paddingHorizontal:10

    },
    button:{
        width:120,
        height:40,
        backgroundColor:'#F07226',
        borderRadius:10,
        textAlign:'center',
        paddingTop:4,
        fontSize:20,
        fontWeight:'bold'
    }

})

export default Composing;