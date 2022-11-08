import React from 'react'
import { Text, View,StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

const styles=StyleSheet.create({

    container:{
        padding:10,
        backgroundColor:'white'

    },
    TitleText:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:20



    },
    BodyText:{
        fontSize:20,
        borderWidth:0.3,
        padding:5,
        paddingTop:20

    },
    ButtonCss:{

        flexDirection:"column",
        paddingTop:20
        

    },
    BCL:{
        fontSize:25,
        fontWeight:'bold',
        borderWidth:2,
        textAlign:'center',
        padding:10
    },
    BCR:{
        fontSize:25,
        fontWeight:'bold',
        borderWidth:2,
        textAlign:'center',
        padding:10,
    }
})

const EmailInfo = props =>{
    const {route}=props
    const {params} = route;
    const {item} = params;
    const {title,body}=item;

    return(
        <View style={styles.container}>
            <Text style={styles.TitleText}>
                {title}
            </Text>
            <Text style={styles.BodyText}>
                {body}
            </Text>

            <View style={styles.ButtonCss}>
                <TouchableOpacity onPress={()=>{Alert.alert('Replying')}}>
                    <Text style={styles.BCL}>Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop:20}} onPress={()=>{Alert.alert('Replying All')}}>
                    <Text style={styles.BCR}>Reply All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop:20}} onPress={()=>{Alert.alert('Forward')}}>
                    <Text style={styles.BCR}>Forward</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )


}

export default EmailInfo;